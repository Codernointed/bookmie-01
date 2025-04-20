
import React, { useEffect, useState } from 'react';

interface CodeBackgroundProps {
  className?: string;
}

// Array of code snippets that will randomly display in the background
const codeSnippets = [
  `function optimizePerformance(code) {
  const metrics = analyzeRuntime(code);
  return metrics.map(m => 
    improveAlgorithm(m)
  ).filter(x => x.complexity < O_N_SQUARED);
}`,
  `const createMicroservice = async () => {
  await setupDatabase();
  const api = new API();
  api.configure({
    scaling: 'auto',
    security: 'enhanced',
    monitoring: true
  });
  return api.deploy();
}`,
  `class CloudArchitecture {
  constructor(requirements) {
    this.resources = this.allocate(requirements);
    this.scaling = new AutoScaler(this.resources);
    this.backup = new DisasterRecovery(3);
  }
  
  deploy() {
    return this.resources.map(r => 
      new Promise(resolve => r.provision().then(resolve))
    );
  }
}`,
  `import { useState, useEffect } from 'react';
export default function DataVisualizer({ dataset }) {
  const [processed, setProcessed] = useState([]);
  
  useEffect(() => {
    const transformedData = dataset
      .filter(d => d.value > threshold)
      .map(d => ({
        ...d,
        normalized: normalize(d.value)
      }));
    setProcessed(transformedData);
  }, [dataset]);
  
  return <Chart data={processed} />;
}`
];

const CodeBackground: React.FC<CodeBackgroundProps> = ({ className = "" }) => {
  const [snippets, setSnippets] = useState<{ id: number; code: string; position: string; opacity: string; }[]>([]);
  
  useEffect(() => {
    const generateSnippet = () => {
      return {
        id: Date.now(),
        code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        position: `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`,
        opacity: `${Math.random() * 0.2 + 0.1}`
      };
    };
    
    // Initialize with 5 code snippets
    const initialSnippets = Array.from({ length: 5 }, generateSnippet);
    setSnippets(initialSnippets);
    
    // Add a new snippet every 10 seconds and remove the oldest one
    const interval = setInterval(() => {
      setSnippets(prev => [...prev.slice(1), generateSnippet()]);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {snippets.map(snippet => (
        <div
          key={snippet.id}
          className="absolute text-floral-white/30 font-mono text-xs transform transition-all duration-10000 ease-linear"
          style={{ transform: snippet.position, opacity: snippet.opacity }}
        >
          <pre>{snippet.code}</pre>
        </div>
      ))}
    </div>
  );
};

export default CodeBackground;
