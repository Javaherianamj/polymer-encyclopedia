import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Atom3D } from '../types/polymer';

interface MolecularViewer3DProps {
  atoms?: Atom3D[];
  monomerName: string;
  polymerCode: string;
  isDark: boolean;
}

export const MolecularViewer3D: React.FC<MolecularViewer3DProps> = ({
  atoms,
  monomerName,
  polymerCode,
  isDark
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [viewMode, setViewMode] = useState<'repeating' | 'monomer'>('repeating');

  // Generate accurate 3D Ball-and-Stick atom models for Monomers vs Repeating Units
  const getStructureAtoms = (mode: 'repeating' | 'monomer'): { atoms: Atom3D[]; title: string; formula: string } => {
    const code = polymerCode.toUpperCase();

    if (code.includes('PE') || code.includes('LDPE') || code.includes('HDPE') || code.includes('LLDPE')) {
      if (mode === 'monomer') {
        // Ethylene (C2H4) - Planar sp2 C=C double bond
        return {
          title: 'مونومر اتیلن (Ethylene Monomer)',
          formula: 'CH₂ = CH₂',
          atoms: [
            { element: 'C', x: -0.67, y: 0, z: 0 },
            { element: 'C', x: 0.67, y: 0, z: 0 },
            { element: 'H', x: -1.23, y: 0.93, z: 0 },
            { element: 'H', x: -1.23, y: -0.93, z: 0 },
            { element: 'H', x: 1.23, y: 0.93, z: 0 },
            { element: 'H', x: 1.23, y: -0.93, z: 0 }
          ]
        };
      } else {
        // Polyethylene Repeating Unit -[CH2-CH2]- tetrahedral sp3 zig-zag segment
        return {
          title: 'واحد تکرارشونده پلی‌اتیلن (PE Repeating Unit)',
          formula: '—[ CH₂ — CH₂ ]ₙ—',
          atoms: [
            { element: 'C', x: -1.52, y: -0.4, z: 0 },
            { element: 'C', x: 0, y: 0.4, z: 0 },
            { element: 'C', x: 1.52, y: -0.4, z: 0 },
            // Hydrogens on C1
            { element: 'H', x: -1.52, y: -1.0, z: 0.89 },
            { element: 'H', x: -1.52, y: -1.0, z: -0.89 },
            // Hydrogens on C2
            { element: 'H', x: 0, y: 1.0, z: 0.89 },
            { element: 'H', x: 0, y: 1.0, z: -0.89 },
            // Hydrogens on C3
            { element: 'H', x: 1.52, y: -1.0, z: 0.89 },
            { element: 'H', x: 1.52, y: -1.0, z: -0.89 }
          ]
        };
      }
    }

    if (code.includes('PP')) {
      if (mode === 'monomer') {
        // Propylene CH2=CH-CH3
        return {
          title: 'مونومر پروپیلن (Propylene Monomer)',
          formula: 'CH₂ = CH — CH₃',
          atoms: [
            { element: 'C', x: -1.2, y: 0, z: 0 },
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.1, y: 1.1, z: 0 },
            { element: 'H', x: -1.8, y: 0.85, z: 0 },
            { element: 'H', x: -1.8, y: -0.85, z: 0 },
            { element: 'H', x: 0.2, y: -1.0, z: 0 },
            { element: 'H', x: 0.8, y: 2.1, z: 0 },
            { element: 'H', x: 1.7, y: 0.9, z: 0.88 },
            { element: 'H', x: 1.7, y: 0.9, z: -0.88 }
          ]
        };
      } else {
        // PP Repeating Unit -[CH2-CH(CH3)]-
        return {
          title: 'واحد تکرارشونده پروپیلن (PP Repeating Unit)',
          formula: '—[ CH₂ — CH(CH₃) ]ₙ—',
          atoms: [
            { element: 'C', x: -1.3, y: -0.4, z: 0 },
            { element: 'C', x: 0, y: 0.4, z: 0 },
            { element: 'C', x: 0, y: 1.9, z: 0 }, // Methyl Branch
            { element: 'C', x: 1.3, y: -0.4, z: 0 },
            { element: 'H', x: -1.3, y: -1.0, z: 0.89 },
            { element: 'H', x: -1.3, y: -1.0, z: -0.89 },
            { element: 'H', x: 0, y: 0.4, z: -1.1 },
            { element: 'H', x: 0.9, y: 2.3, z: 0 },
            { element: 'H', x: -0.5, y: 2.3, z: 0.89 },
            { element: 'H', x: -0.5, y: 2.3, z: -0.89 },
            { element: 'H', x: 1.3, y: -1.0, z: 0.89 },
            { element: 'H', x: 1.3, y: -1.0, z: -0.89 }
          ]
        };
      }
    }

    if (code.includes('PVC')) {
      if (mode === 'monomer') {
        return {
          title: 'مونومر وینیل کلراید (Vinyl Chloride)',
          formula: 'CH₂ = CH — Cl',
          atoms: [
            { element: 'C', x: -0.8, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'Cl', x: 1.6, y: 1.2, z: 0 },
            { element: 'H', x: -1.3, y: 0.9, z: 0 },
            { element: 'H', x: -1.3, y: -0.9, z: 0 },
            { element: 'H', x: 0.9, y: -1.0, z: 0 }
          ]
        };
      } else {
        return {
          title: 'واحد تکرارشونده پلی‌وینیل کلراید (PVC Unit)',
          formula: '—[ CH₂ — CH(Cl) ]ₙ—',
          atoms: [
            { element: 'C', x: -1.3, y: -0.4, z: 0 },
            { element: 'C', x: 0, y: 0.4, z: 0 },
            { element: 'Cl', x: 0, y: 2.0, z: 0 },
            { element: 'C', x: 1.3, y: -0.4, z: 0 },
            { element: 'H', x: -1.3, y: -1.0, z: 0.89 },
            { element: 'H', x: -1.3, y: -1.0, z: -0.89 },
            { element: 'H', x: 0, y: 0.4, z: -1.1 },
            { element: 'H', x: 1.3, y: -1.0, z: 0.89 },
            { element: 'H', x: 1.3, y: -1.0, z: -0.89 }
          ]
        };
      }
    }

    if (code.includes('PTFE')) {
      return {
        title: 'واحد تکرارشونده تفلون (PTFE Unit)',
        formula: '—[ CF₂ — CF₂ ]ₙ—',
        atoms: [
          { element: 'C', x: -1.3, y: -0.4, z: 0 },
          { element: 'C', x: 0, y: 0.4, z: 0 },
          { element: 'C', x: 1.3, y: -0.4, z: 0 },
          { element: 'F', x: -1.3, y: -1.0, z: 0.95 },
          { element: 'F', x: -1.3, y: -1.0, z: -0.95 },
          { element: 'F', x: 0, y: 1.0, z: 0.95 },
          { element: 'F', x: 0, y: 1.0, z: -0.95 },
          { element: 'F', x: 1.3, y: -1.0, z: 0.95 },
          { element: 'F', x: 1.3, y: -1.0, z: -0.95 }
        ]
      };
    }

    if (code.includes('PS')) {
      // Styrene / Polystyrene
      const r = 1.3;
      return {
        title: mode === 'monomer' ? 'مونومر استایرن (Styrene)' : 'واحد تکرارشونده پلی‌استایرن (PS)',
        formula: '—[ CH₂ — CH(C₆H₅) ]ₙ—',
        atoms: [
          { element: 'C', x: -1.3, y: -0.4, z: 0 },
          { element: 'C', x: 0, y: 0.4, z: 0 },
          { element: 'C', x: 1.3, y: -0.4, z: 0 },
          // Benzene ring attached to C2
          { element: 'C', x: 0, y: 1.8, z: 0 },
          { element: 'C', x: r * Math.cos(Math.PI / 6), y: 1.8 + r * Math.sin(Math.PI / 6), z: 0 },
          { element: 'C', x: r * Math.cos(Math.PI / 6), y: 1.8 + r + r * Math.sin(Math.PI / 6), z: 0 },
          { element: 'C', x: 0, y: 1.8 + 2 * r, z: 0 },
          { element: 'C', x: -r * Math.cos(Math.PI / 6), y: 1.8 + r + r * Math.sin(Math.PI / 6), z: 0 },
          { element: 'C', x: -r * Math.cos(Math.PI / 6), y: 1.8 + r * Math.sin(Math.PI / 6), z: 0 },
          // Hydrogens
          { element: 'H', x: -1.3, y: -1.0, z: 0.89 },
          { element: 'H', x: -1.3, y: -1.0, z: -0.89 },
          { element: 'H', x: 1.3, y: -1.0, z: 0.89 },
          { element: 'H', x: 1.3, y: -1.0, z: -0.89 }
        ]
      };
    }

    // Default Fallback (Atoms passed or standard chain)
    const activeAtoms = atoms && atoms.length > 0 ? atoms : [
      { element: 'C', x: -1.3, y: -0.4, z: 0 },
      { element: 'C', x: 0, y: 0.4, z: 0 },
      { element: 'C', x: 1.3, y: -0.4, z: 0 },
      { element: 'H', x: -1.3, y: -1.0, z: 0.89 },
      { element: 'H', x: -1.3, y: -1.0, z: -0.89 },
      { element: 'H', x: 0, y: 1.0, z: 0.89 },
      { element: 'H', x: 0, y: 1.0, z: -0.89 },
      { element: 'H', x: 1.3, y: -1.0, z: 0.89 },
      { element: 'H', x: 1.3, y: -1.0, z: -0.89 }
    ];

    return {
      title: `${polymerCode} - ${monomerName}`,
      formula: `-[ ${polymerCode} ]n-`,
      atoms: activeAtoms
    };
  };

  const currentData = getStructureAtoms(viewMode);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 400;
    const height = 300;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isDark ? 0x0f172a : 0xf8fafc);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    const molGroup = new THREE.Group();

    // CPK Element Colors & Radii
    const colorMap: Record<string, number> = {
      C: 0x374151, // Dark Gray
      H: 0xf3f4f6, // White
      O: 0xef4444, // Red
      N: 0x3b82f6, // Blue
      Cl: 0x10b981, // Green
      F: 0x8b5cf6 // Purple
    };

    const radiusMap: Record<string, number> = {
      C: 0.44,
      H: 0.24,
      O: 0.38,
      N: 0.40,
      Cl: 0.52,
      F: 0.36
    };

    // Render Atom Spheres
    currentData.atoms.forEach((atom) => {
      const radius = radiusMap[atom.element] || 0.35;
      const geo = new THREE.SphereGeometry(radius, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: colorMap[atom.element] || 0xcccccc,
        roughness: 0.2,
        metalness: 0.1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(atom.x, atom.y, atom.z);
      molGroup.add(mesh);
    });

    // Render Chemical Bonds (distance filter)
    const atomList = currentData.atoms;
    for (let i = 0; i < atomList.length; i++) {
      for (let j = i + 1; j < atomList.length; j++) {
        const el1 = atomList[i].element;
        const el2 = atomList[j].element;

        // Hydrogens never bond to other hydrogens
        if (el1 === 'H' && el2 === 'H') continue;

        // Halogens/Hydrogens don't bond to each other directly
        if ((el1 === 'Cl' || el1 === 'F' || el1 === 'H') && (el2 === 'Cl' || el2 === 'F' || el2 === 'H')) continue;

        const p1 = new THREE.Vector3(atomList[i].x, atomList[i].y, atomList[i].z);
        const p2 = new THREE.Vector3(atomList[j].x, atomList[j].y, atomList[j].z);
        const dist = p1.distanceTo(p2);

        // Max covalent bond length (e.g. C-C = ~1.54Å, C-H = ~1.09Å, C-Cl = ~1.77Å)
        const maxDist = (el1 === 'Cl' || el2 === 'Cl') ? 1.95 : 1.75;

        if (dist > 0.1 && dist < maxDist) {
          const bondGeo = new THREE.CylinderGeometry(0.1, 0.1, dist, 16);
          const bondMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 0.3 });
          const bondMesh = new THREE.Mesh(bondGeo, bondMat);

          const midPoint = p1.clone().add(p2).multiplyScalar(0.5);
          bondMesh.position.copy(midPoint);

          const dir = p2.clone().sub(p1).normalize();
          const axis = new THREE.Vector3(0, 1, 0);
          bondMesh.quaternion.setFromUnitVectors(axis, dir);

          molGroup.add(bondMesh);
        }
      }
    }

    scene.add(molGroup);

    // Mouse Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const domElement = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      molGroup.rotation.y += deltaMove.x * 0.01;
      molGroup.rotation.x += deltaMove.y * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(3, Math.min(20, camera.position.z));
    };

    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (autoRotate && !isDragging) {
        molGroup.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [currentData, isDark, autoRotate]);

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <span className="text-2xl">🔬</span>
            <span>مدل سه‌بعدی مولکولی (3D Ball-and-Stick Viewer)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {currentData.title} • فرمول شیمیایی:{' '}
            <span className="en-mono font-bold text-blue-600 dark:text-blue-400">{currentData.formula}</span>
          </p>
        </div>

        {/* View Mode & Auto-Rotate Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setViewMode('repeating')}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === 'repeating'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              واحد تکرارشونده
            </button>
            <button
              onClick={() => setViewMode('monomer')}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === 'monomer'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              مونومر پایه
            </button>
          </div>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>{autoRotate ? '⏸️ توقف' : '▶️ چرخش'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Box */}
      <div
        ref={mountRef}
        className="w-full h-[300px] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden cursor-grab active:cursor-grabbing relative bg-slate-50 dark:bg-slate-900 shadow-inner"
      />

      {/* Legend & Instructions */}
      <div className="flex flex-wrap justify-between items-center gap-4 mt-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex flex-wrap gap-3 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#374151] inline-block" /> کربن (C)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#f3f4f6] border border-slate-400 inline-block" /> هیدروژن (H)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" /> اکسیژن (O)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" /> کلر (Cl)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#8b5cf6] inline-block" /> فلوئور (F)
          </span>
        </div>

        <div className="text-[11px] text-slate-400">
          💡 چرخاندن با کشیدن موس • بزرگ‌نمایی با اسکرول
        </div>
      </div>
    </div>
  );
};
