"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xfffcf5)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(15, 10, 15)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.enableZoom = false

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Create building structure
    const createBuilding = () => {
      const buildingGroup = new THREE.Group()

      // Base
      const baseGeometry = new THREE.BoxGeometry(10, 1, 10)
      const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7e66 })
      const base = new THREE.Mesh(baseGeometry, baseMaterial)
      base.position.y = 0.5
      base.receiveShadow = true
      buildingGroup.add(base)

      // Main tower
      const towerGeometry = new THREE.BoxGeometry(8, 20, 8)
      const towerMaterial = new THREE.MeshStandardMaterial({
        color: 0xfffcf5,
        transparent: true,
        opacity: 0.8,
      })
      const tower = new THREE.Mesh(towerGeometry, towerMaterial)
      tower.position.y = 11
      tower.castShadow = true
      buildingGroup.add(tower)

      // Floors/levels
      for (let i = 1; i < 10; i++) {
        const floorGeometry = new THREE.BoxGeometry(8.2, 0.2, 8.2)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x3a3a3a })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.position.y = i * 2 + 1
        floor.castShadow = true
        buildingGroup.add(floor)
      }

      // Concert hall (larger section in the middle)
      const hallGeometry = new THREE.BoxGeometry(9, 4, 9)
      const hallMaterial = new THREE.MeshStandardMaterial({
        color: 0xe5dcc3,
        transparent: true,
        opacity: 0.9,
      })
      const hall = new THREE.Mesh(hallGeometry, hallMaterial)
      hall.position.y = 13
      hall.castShadow = true
      buildingGroup.add(hall)

      // Roof/Sky garden
      const roofGeometry = new THREE.CylinderGeometry(5, 8, 2, 4)
      const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7e66 })
      const roof = new THREE.Mesh(roofGeometry, roofMaterial)
      roof.position.y = 22
      roof.castShadow = true
      buildingGroup.add(roof)

      // Decorative elements - sound wave shapes
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2
        const waveGeometry = new THREE.TorusGeometry(6, 0.2, 16, 50, Math.PI)
        const waveMaterial = new THREE.MeshStandardMaterial({ color: 0x3a3a3a })
        const wave = new THREE.Mesh(waveGeometry, waveMaterial)
        wave.position.set(Math.cos(angle) * 5, 10, Math.sin(angle) * 5)
        wave.rotation.y = angle + Math.PI / 2
        wave.rotation.x = Math.PI / 2
        wave.castShadow = true
        buildingGroup.add(wave)
      }

      return buildingGroup
    }

    const building = createBuilding()
    scene.add(building)

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(100, 100)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5dcc3,
      roughness: 1,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = 0
    ground.receiveShadow = true
    scene.add(ground)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}
