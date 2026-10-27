import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import reactIcon from "../../assets/icons/reactjs.png";
import rnIcon from "../../assets/icons/reactnative.png";
import tsIcon from "../../assets/icons/typescript.png";
import jsIcon from "../../assets/icons/javascript.png";
import javaIcon from "../../assets/icons/java.png";
import kotlinIcon from "../../assets/icons/kotlin.png";
import sqlIcon from "../../assets/icons/sql.png";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import angularIcon from "../../assets/icons/angular.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
import muiIcon from "../../assets/icons/materialui.png";
import androidIcon from "../../assets/icons/androidstudio.png";
import firebaseIcon from "../../assets/icons/firebase.png";
import nodeIcon from "../../assets/icons/nodejs.png";
import expressIcon from "../../assets/icons/express.png";
import mongoIcon from "../../assets/icons/mongodb.png";
import supabaseIcon from "../../assets/icons/supabase.png";
import appwriteIcon from "../../assets/icons/appwrite.png";
import dockerIcon from "../../assets/icons/docker.png";
import k8sIcon from "../../assets/icons/kubernates.png";
import gitIcon from "../../assets/icons/git.png";
import figmaIcon from "../../assets/icons/figma.png";
import paystackIcon from "../../assets/icons/paystack.png";
import vscodeIcon from "../../assets/icons/vscode.png";

interface Skill {
  name: string;
  icon?: string;
}
interface Face {
  id: string;
  title: { en: string; fr: string };
  color: string;
  skills: Skill[];
}

// Order matches BoxGeometry material slots: +x, -x, +y, -y, +z, -z.
const FACES: Face[] = [
  {
    id: "frontend",
    title: { en: "Frontend", fr: "Frontend" },
    color: "#61dafb",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Next.js" },
      { name: "Angular", icon: angularIcon },
      { name: "Vue" },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Material UI", icon: muiIcon },
      { name: "Framer Motion" },
      { name: "Three.js" },
    ],
  },
  {
    id: "languages",
    title: { en: "Languages", fr: "Langages" },
    color: "#f7df1e",
    skills: [
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Python" },
      { name: "Java", icon: javaIcon },
      { name: "Kotlin", icon: kotlinIcon },
      { name: "C++" },
      { name: "SQL", icon: sqlIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
    ],
  },
  {
    id: "mobile",
    title: { en: "Mobile", fr: "Mobile" },
    color: "#e879f9",
    skills: [
      { name: "React Native", icon: rnIcon },
      { name: "Expo" },
      { name: "Android Studio", icon: androidIcon },
      { name: "Kotlin", icon: kotlinIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Paystack", icon: paystackIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "VS Code", icon: vscodeIcon },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend & Data", fr: "Backend & Données" },
    color: "#8cc84b",
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "Spring Boot" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "MongoDB", icon: mongoIcon },
      { name: "Supabase", icon: supabaseIcon },
      { name: "Appwrite", icon: appwriteIcon },
      { name: "GraphQL" },
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps", fr: "DevOps" },
    color: "#2496ed",
    skills: [
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: k8sIcon },
      { name: "Git", icon: gitIcon },
      { name: "GitHub" },
      { name: "Nginx" },
      { name: "Linux" },
      { name: "Bash" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
  {
    id: "ai",
    title: { en: "AI & Data", fr: "IA & Données" },
    color: "#a78bfa",
    skills: [
      { name: "OpenAI API" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
      { name: "Prompt Eng." },
      { name: "Speech-to-Text" },
      { name: "Text-to-Speech" },
      { name: "BigQuery" },
      { name: "Machine Learning" },
      { name: "Data Analytics" },
    ],
  },
];

// Outward normal of each BoxGeometry face, same order as FACES.
const NORMALS = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(0, 0, -1),
];

const SIZE = 768;

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(img);
    img.src = src;
  });
}

async function paintFace(face: Face, lang: "en" | "fr") {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, SIZE, SIZE);
  bg.addColorStop(0, "#0d0b24");
  bg.addColorStop(1, "#050510");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, SIZE, SIZE);

  const glow = ctx.createRadialGradient(SIZE / 2, 0, 0, SIZE / 2, 0, SIZE * 0.8);
  glow.addColorStop(0, face.color + "55");
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, SIZE, SIZE);

  ctx.strokeStyle = face.color;
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, SIZE - 20, SIZE - 20);

  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.font = '700 54px "Space Grotesk", Inter, sans-serif';
  ctx.fillText(face.title[lang], SIZE / 2, 98);
  ctx.fillStyle = face.color;
  ctx.fillRect(SIZE / 2 - 40, 118, 80, 4);

  const imgs = await Promise.all(face.skills.map((s) => (s.icon ? loadImage(s.icon) : Promise.resolve(null))));
  const cell = (SIZE - 80) / 3;
  face.skills.forEach((skill, i) => {
    const cx = 40 + (i % 3) * cell + cell / 2;
    const cy = 170 + Math.floor(i / 3) * ((SIZE - 200) / 3) + 70;
    const img = imgs[i];
    if (img && img.naturalWidth) {
      const r = 64;
      ctx.drawImage(img, cx - r / 2, cy - r / 2 - 14, r, r);
    } else {
      ctx.beginPath();
      ctx.arc(cx, cy - 14, 32, 0, Math.PI * 2);
      ctx.fillStyle = face.color + "33";
      ctx.fill();
      ctx.strokeStyle = face.color;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = '700 32px "Space Grotesk", Inter, sans-serif';
      ctx.fillText(skill.name[0], cx, cy - 3);
    }
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = '600 25px Inter, sans-serif';
    ctx.fillText(skill.name, cx, cy + 50, cell - 12);
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

export default function SkillsCube({ lang }: { lang: "en" | "fr" }) {
  const mount = useRef<HTMLDivElement>(null);
  const focusRef = useRef<(i: number) => void>(() => {});
  const [active, setActive] = useState(0);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "pan-y";
    renderer.domElement.style.cursor = "grab";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(0, 0, 7.4);

    const cube = new THREE.Group();
    scene.add(cube);

    // Soft halo behind the cube
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 9),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {},
        vertexShader: "varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader:
          "varying vec2 v;void main(){float d=distance(v,vec2(.5));gl_FragColor=vec4(.55,.35,.95,smoothstep(.5,.0,d)*.22);}",
      }),
    );
    halo.position.z = -3;
    scene.add(halo);

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const materials = FACES.map(() => new THREE.MeshBasicMaterial({ color: 0x0a0a1a }));
    cube.add(new THREE.Mesh(geometry, materials));
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.9 }),
    );
    cube.add(edges);

    let disposed = false;
    const textures: THREE.Texture[] = [];
    (document.fonts?.ready ?? Promise.resolve()).then(() =>
      Promise.all(FACES.map((f) => paintFace(f, lang))).then((texs) => {
        if (disposed) return texs.forEach((t) => t.dispose());
        texs.forEach((t, i) => {
          textures.push(t);
          materials[i].map = t;
          materials[i].color.set(0xffffff);
          materials[i].needsUpdate = true;
        });
      }),
    );

    cube.quaternion.setFromEuler(new THREE.Euler(-0.35, 0.55, 0));

    // --- interaction state ---
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    const vel = { x: 0, y: 0 };
    let target: THREE.Quaternion | null = null;
    let idleSince = performance.now();
    let hover = false;
    let visible = true;
    let raf = 0;
    let lastActive = -1;

    const frontFace = () => {
      let best = 0;
      let bestZ = -2;
      const v = new THREE.Vector3();
      NORMALS.forEach((n, i) => {
        v.copy(n).applyQuaternion(cube.quaternion);
        if (v.z > bestZ) {
          bestZ = v.z;
          best = i;
        }
      });
      return best;
    };

    focusRef.current = (i: number) => {
      // Rotate the cube so face i points at the camera.
      target = new THREE.Quaternion().setFromUnitVectors(NORMALS[i], new THREE.Vector3(0, 0, 1));
      vel.x = vel.y = 0;
      idleSince = performance.now();
    };

    const dom = renderer.domElement;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      target = null;
      lastX = e.clientX;
      lastY = e.clientY;
      dom.setPointerCapture(e.pointerId);
      dom.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      vel.y = (e.clientX - lastX) * 0.008;
      vel.x = (e.clientY - lastY) * 0.008;
      lastX = e.clientX;
      lastY = e.clientY;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(vel.x, vel.y, 0));
      cube.quaternion.premultiply(q);
    };
    const onUp = () => {
      dragging = false;
      idleSince = performance.now();
      dom.style.cursor = "grab";
    };
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    dom.addEventListener("pointerdown", onDown);
    dom.addEventListener("pointermove", onMove);
    dom.addEventListener("pointerup", onUp);
    dom.addEventListener("pointercancel", onUp);
    dom.addEventListener("pointerenter", onEnter);
    dom.addEventListener("pointerleave", onLeave);

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      renderer.setSize(w, h, false);
      dom.style.width = "100%";
      dom.style.height = "100%";
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // Only render while on screen.
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.05 });
    io.observe(host);

    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) {
        clock.getDelta();
        return;
      }
      const dt = Math.min(clock.getDelta(), 0.05);

      if (target) {
        cube.quaternion.slerp(target, 1 - Math.pow(0.0015, dt));
        if (cube.quaternion.angleTo(target) < 0.002) target = null;
      } else if (!dragging) {
        // inertia from the last drag, then slow auto-spin once idle
        if (Math.abs(vel.x) > 0.0005 || Math.abs(vel.y) > 0.0005) {
          cube.quaternion.premultiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(vel.x, vel.y, 0)));
          vel.x *= 0.94;
          vel.y *= 0.94;
        } else if (!reduced && !hover && performance.now() - idleSince > 600) {
          cube.quaternion.premultiply(
            new THREE.Quaternion().setFromEuler(new THREE.Euler(0.12 * dt, 0.45 * dt, 0)),
          );
        }
      }

      const f = frontFace();
      if (f !== lastActive) {
        lastActive = f;
        setActive(f);
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      dom.removeEventListener("pointerdown", onDown);
      dom.removeEventListener("pointermove", onMove);
      dom.removeEventListener("pointerup", onUp);
      dom.removeEventListener("pointercancel", onUp);
      dom.removeEventListener("pointerenter", onEnter);
      dom.removeEventListener("pointerleave", onLeave);
      geometry.dispose();
      edges.geometry.dispose();
      (edges.material as THREE.Material).dispose();
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      halo.geometry.dispose();
      (halo.material as THREE.Material).dispose();
      renderer.dispose();
      dom.remove();
    };
  }, [lang]);

  const face = FACES[active];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div
        ref={mount}
        className="relative mx-auto aspect-square w-full max-w-[34rem]"
        role="img"
        aria-label={lang === "fr" ? "Cube 3D interactif de mes compétences" : "Interactive 3D cube of my skills"}
      />
      <div>
        <p className="eyebrow text-fuchsia-300/80">
          {lang === "fr" ? "Faites glisser le cube" : "Drag the cube"}
        </p>
        <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: face.color }}>
          {face.title[lang]}
        </h3>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {face.skills.map((s) => (
            <li
              key={s.name}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm backdrop-blur"
            >
              {s.icon ? (
                <img src={s.icon} alt="" width={16} height={16} loading="lazy" className="h-4 w-4 object-contain" />
              ) : (
                <span className="h-2 w-2 rounded-full" style={{ background: face.color }} />
              )}
              {s.name}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {FACES.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => focusRef.current(i)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                i === active ? "text-black" : "border-white/15 bg-white/5 text-foreground/70 hover:bg-white/10"
              }`}
              style={i === active ? { background: f.color, borderColor: f.color } : undefined}
            >
              {f.title[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
