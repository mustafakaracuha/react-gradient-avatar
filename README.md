# React Avatar Gradient

A simple, customizable React Avatar component that generates avatars with initials on a pastel background color.

## Features

- Displays user initials on a pastel-colored background
- Color is consistently generated based on the user's name
- Customizable size
- Shape options: circle or square
- TypeScript support

## Installation

```bash
npm install react-avatar-gradient
# or
yarn add react-avatar-gradient
```

## Usage

```tsx
import React from 'react';
import { Avatar } from 'react-avatar-gradient';

function App() {
  return (
    <div className="App">
      {/* Default avatar (circle, size 40px) */}
      <Avatar title="John Doe"/>
      
      {/* Custom size */}
      <Avatar title="Jane Smith" size={60} />
      
      {/* Square shape */}
      <Avatar title="Alex Johnson" shape="square"  colorPalette="{["#FFB6C1"]}"/>
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | (required) | The user's name used to generate initials and background color |
| `size` | number | 40 | Size of the avatar in pixels |
| `shape` | 'circle' \| 'square' | 'circle' | Shape of the avatar |
| `color` | string | '#FFB6C1' | Color of the avatar |
| `avatars` | string | random | Array of avatar names (required) |


## How It Works

The component extracts the first letter from each word in the `title` prop (up to 2 letters) and displays them as initials. The background color is a pastel color generated deterministically from the `title` string, ensuring the same name always gets the same color.

## Live Demo
You can see a live demo of the component [here](https://react-avatar-gradient.vercel.app).

## License

MIT License

Copyright (c) 2025 Mustafa Karaçuha