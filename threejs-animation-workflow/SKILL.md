---
name: "Three.js Animation Workflow"
description: "A pattern and workflow for importing and animating 3D models with Three.js"
---

# Three.js Animation Workflow

This skill provides a reference for importing and animating 3D models from Blender into Three.js.

## Key Concepts
- Use "THREE.JSONLoader()" to load ".json" models.
- Set "material.skinning = true" if the model has a skeleton.
- Use "THREE.SkinnedMesh" to render the character.
- Initialize "THREE.AnimationMixer(character)" to play animations.
- Blend between animations using "actionA.crossFadeTo(actionB, duration)".
- Update the mixer in the render loop: "mixer.update(clock.getDelta())".

Source code reference is cloned at "C:\Users\mohan\Downloads\PROJECT 1 ANTIGRAVITY\threejs-animation-workflow".
