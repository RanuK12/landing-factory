#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// TypeScript interface for the config
interface LandingConfig {
  businessName: string;
  tagline: string;
  nicho: {
    id: string;
    name: string;
    description: string;
    price: number;
    icon: string;
    features: string[];
    colorScheme: "restaurant" | "professional" | "startup" | "creative" | "ecommerce" | "realestate";
  };
}

// Read the config file
const configPath = join(process.cwd(), 'landing.config.json');
try {
  const configContent = readFileSync(configPath, 'utf-8');
  const config: LandingConfig = JSON.parse(configContent);
  
  // Validate required fields
  if (!config.businessName) throw new Error('Missing required field: businessName');
  if (!config.tagline) throw new Error('Missing required field: tagline');
  if (!config.nicho) throw new Error('Missing required field: nicho');
  
  const { businessName, tagline, nicho } = config;
  
  // Validate nicho fields
  if (!nicho.id) throw new Error('Missing required nicho field: id');
  if (!nicho.name) throw new Error('Missing required nicho field: name');
  if (!nicho.description) throw new Error('Missing required nicho field: description');
  if (!nicho.price) throw new Error('Missing required nicho field: price');
  if (!nicho.icon) throw new Error('Missing required nicho field: icon');
  if (!nicho.features) throw new Error('Missing required nicho field: features');
  if (!nicho.colorScheme) throw new Error('Missing required nicho field: colorScheme');
  
  // Validate colorScheme
  const validColorSchemes = ["restaurant", "professional", "startup", "creative", "ecommerce", "realestate"];
  if (!validColorSchemes.includes(nicho.colorScheme)) {
    throw new Error(`Invalid colorScheme: ${nicho.colorScheme}. Must be one of: ${validColorSchemes.join(', ')}`);
  }
  
  // Read existing nichos file
  const nichosPath = join(process.cwd(), 'src/data/nichos.ts');
  const nichosContent = readFileSync(nichosPath, 'utf-8');
  
  // Extract the array content (between the square brackets)
  const arrayStart = nichosContent.indexOf('export const nichos: Nicho[] = [');
  const arrayEnd = nichosContent.lastIndexOf('];');
  
  if (arrayStart === -1 || arrayEnd === -1) {
    throw new Error('Could not find nichos array in nichos.ts');
  }
  
  // Extract the existing array content
  const existingArrayContent = nichosContent.slice(arrayStart + 'export const nichos: Nicho[] = ['.length, arrayEnd);
  
  // Format the new nicho entry
  const formattedNicho = `  {
    id: "${nicho.id}",
    name: "${nicho.name}",
    description: "${nicho.description}",
    price: ${nicho.price},
    icon: "${nicho.icon}",
    features: [
${nicho.features.map(f => `      "${f}"`).join(',\n')},
    ],
    colorScheme: "${nicho.colorScheme}",
  }`;
  
  // Combine existing array with new entry
  const trimmedExisting = existingArrayContent.trim();
  const newArrayContent = trimmedExisting + (trimmedExisting.endsWith(',') ? '' : ',') + '\n\n' + formattedNicho;
  
  // Rebuild the full file content
  const newNichosContent = nichosContent.slice(0, arrayStart) + 'export const nichos: Nicho[] = [' + newArrayContent + '\n];' + nichosContent.slice(arrayEnd + 2);
  
  // Write the updated file
  writeFileSync(nichosPath, newNichosContent);
  
  console.log(`✅ Successfully added nicho "${nicho.name}" to nichos.ts`);
  console.log(`📝 Business: ${businessName}`);
  console.log(`🎯 Tagline: ${tagline}`);
  
} catch (error) {
  console.error('❌ Error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
}