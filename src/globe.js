/**
 * Globe — Interactive 3D globe with project locations, labels, and flight arcs
 * Shows real DCM projects around the world
 */
import Globe from 'globe.gl';
import * as THREE from 'three';

export function initGlobe() {
    const container = document.getElementById('globe-container');
    if (!container || window.innerWidth < 768) {
        if (container) container.style.display = 'none';
        return;
    }

    // Real DCM project locations with labels
    const projects = [
        { lat: 10.9685, lng: -74.7813, name: 'DCM HQ', project: 'Sede Principal', color: '#f59e0b', size: 1.4 },
        { lat: 4.6097, lng: -74.0817, name: 'Bogotá', project: 'ID Digital / Carnet Digital', color: '#22c55e', size: 1.2 },
        { lat: 4.7097, lng: -74.1817, name: 'Bogotá', project: 'ZUTRICS — PROCAPS Salud IA', color: '#10b981', size: 1.1 },
        { lat: 36.1716, lng: -115.1391, name: 'Las Vegas', project: 'Cannon - IA Industrial', color: '#ef4444', size: 1.0 },
        { lat: 40.4168, lng: -3.7038, name: 'Madrid', project: 'Consultoria Enterprise', color: '#a855f7', size: 0.8 },
        { lat: 19.4326, lng: -99.1332, name: 'CDMX', project: 'Automatizacion RPA', color: '#0ea5e9', size: 0.8 },
        { lat: -23.5505, lng: -46.6333, name: 'Sao Paulo', project: 'Integracion ERP', color: '#0ea5e9', size: 0.8 },
        { lat: 51.5072, lng: -0.1276, name: 'London', project: 'Smart City Analytics', color: '#06b6d4', size: 0.8 },
    ];

    // Flight arcs connecting Barranquilla to all project locations
    const arcsData = projects.slice(1).map(p => ({
        startLat: 10.9685, startLng: -74.7813,
        endLat: p.lat, endLng: p.lng,
        color: p.color
    }));

    // Add some cross-project arcs for visual density
    for (let i = 0; i < 8; i++) {
        const a = projects[Math.floor(Math.random() * projects.length)];
        let b;
        do { b = projects[Math.floor(Math.random() * projects.length)]; } while (b === a);
        arcsData.push({
            startLat: a.lat, startLng: a.lng,
            endLat: b.lat, endLng: b.lng,
            color: '#0ea5e966'
        });
    }

    const globeMaterial = new THREE.MeshPhongMaterial({
        color: '#0a0e1a',
        emissive: '#1e3a8a',
        emissiveIntensity: 0.4,
        specular: '#60a5fa',
        shininess: 60,
        transparent: true,
        opacity: 0.95
    });

    const world = Globe()(container)
        .globeMaterial(globeMaterial)
        .backgroundColor('rgba(0,0,0,0)')
        // Points (project markers)
        .pointsData(projects)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointAltitude(0.06)
        .pointRadius(d => d.size * 0.5)
        // HTML Labels for projects
        .htmlElementsData(projects)
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0.1)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.className = 'globe-label';
            el.innerHTML = `
                <div class="globe-label-dot" style="background:${d.color};box-shadow:0 0 8px ${d.color}"></div>
                <div class="globe-label-text">
                    <strong>${d.name}</strong>
                    <span>${d.project}</span>
                </div>
            `;
            el.style.pointerEvents = 'auto';
            el.style.cursor = 'default';
            return el;
        })
        // Arcs
        .arcsData(arcsData)
        .arcColor('color')
        .arcDashLength(0.5)
        .arcDashGap(4)
        .arcDashInitialGap(() => Math.random() * 5)
        .arcDashAnimateTime(1500)
        .arcStroke(1.2)
        // Atmosphere
        .atmosphereColor('#0ea5e9')
        .atmosphereAltitude(0.25)
        .width(container.clientWidth)
        .height(container.clientHeight);

    // Load countries
    fetch('https://unpkg.com/globe.gl/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            world.polygonsData(countries.features)
                .polygonCapColor(() => '#1e293b')
                .polygonSideColor(() => 'rgba(0,0,0,0)')
                .polygonStrokeColor(() => '#3b82f6')
                .polygonAltitude(0.01);
        })
        .catch(() => {});

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.6;
    world.controls().enableZoom = false;

    (function animate() {
        world.controls().update();
        requestAnimationFrame(animate);
    })();

    window.addEventListener('resize', () => {
        world.width(container.clientWidth);
        world.height(container.clientHeight);
    });

    // Inject globe label styles
    const style = document.createElement('style');
    style.textContent = `
        .globe-label {
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
            font-family: 'Inter', sans-serif;
            pointer-events: none;
        }
        .globe-label-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .globe-label-text {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }
        .globe-label-text strong {
            font-size: 0.6rem;
            font-weight: 700;
            color: #fff;
        }
        .globe-label-text span {
            font-size: 0.5rem;
            color: #94a3b8;
            font-family: 'JetBrains Mono', monospace;
        }
    `;
    document.head.appendChild(style);
}
