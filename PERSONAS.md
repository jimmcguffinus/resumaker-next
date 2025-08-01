# Persona System Documentation

## Overview

The resume maker now uses a unified persona system that combines all AI personalities into a single, extensible configuration. This system allows for easy addition of new personas and ensures consistency across the application.

## How It Works

1. **Centralized Configuration**: All personas are defined in `lib/persona-loader.ts`
2. **API Endpoint**: The `/api/personas` endpoint serves the persona data
3. **Dynamic Loading**: Components load personas dynamically from the API
4. **Unified Interface**: Both the main persona selector and modal use the same persona list

## Current Personas

### Professional Personas
- **Default Assistant**: Balanced professional tone
- **Senior Developer**: Technical leadership and architecture focus
- **Junior Developer**: Enthusiastic learning and growth focus
- **Data Scientist**: Analytical and data-driven approach
- **Product Manager**: Strategic and customer-focused
- **Designer**: Creative and user-centered
- **DevOps Engineer**: Infrastructure and automation focused
- **Full Stack Developer**: End-to-end development expertise
- **Frontend Developer**: UI/UX and user interaction focus
- **Backend Developer**: Server-side and data expertise

### Character Personas
- **Bubba Johnson (Redneck)**: Southern charm with blue-collar pride
- **Cletus McCoy (Hillbilly)**: Mountain heritage and traditional values
- **Executive Assistant Pro (Corporate)**: Professional business jargon

## Adding New Personas

To add a new persona, edit `lib/persona-loader.ts` and add a new entry to the `STATIC_PERSONAS` object:

```typescript
"new-persona-key": {
  name: "Display Name",
  speechPattern: [
    "Characteristic speech pattern 1",
    "Characteristic speech pattern 2",
    "Characteristic speech pattern 3"
  ],
  exampleResponses: "Hello! I'm your AI assistant with a [personality] mindset. [Custom greeting with emoji]",
  professionalStyle: [
    "Professional style characteristic 1",
    "Professional style characteristic 2",
    "Professional style characteristic 3"
  ],
  keywords: [
    "\"keyword1\", \"keyword2\", \"keyword3\"",
    "\"phrase1\", \"phrase2\", \"phrase3\"",
    "\"category1\", \"category2\", \"category3\""
  ]
}
```

### Persona Structure

- **name**: Display name shown in the UI
- **speechPattern**: Array of speech characteristics for the AI
- **exampleResponses**: Sample greeting message with personality
- **professionalStyle**: Array of professional characteristics
- **keywords**: Array of keyword phrases for AI context

### Key Guidelines

1. **Unique Keys**: Use kebab-case for persona keys (e.g., "senior-developer")
2. **Descriptive Names**: Use clear, professional display names
3. **Consistent Structure**: Follow the existing pattern for all fields
4. **Emoji Usage**: Include relevant emojis in example responses
5. **Professional Focus**: Even character personas should maintain professional resume focus

## Usage

The persona system is automatically loaded by:
- `PersonaSelector` component (main UI)
- `ResumeGenerator` component (modal)

Both components fetch personas from `/api/personas` and display them dynamically.

## Benefits

- **Single Source of Truth**: All personas defined in one place
- **Easy Extension**: Add new personas without code changes
- **Consistent Experience**: Same personas available everywhere
- **Maintainable**: Centralized configuration for easy updates
- **Scalable**: Can easily add dozens of personas without performance impact 