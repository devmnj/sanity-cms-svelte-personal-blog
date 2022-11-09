<script>
    import Particles from "svelte-particles";
    import { loadFull } from "tsparticles";

    let particlesUrl = "http://foo.bar/particles.json";

    let particlesConfig = {
        particles: {
            color: {
                value: "#0d47a1",
            },
            links: {
                enable: true,
                color: "#0d47a1",
            },
            move: {
                enable: true,
            },
        },
    };

    let onParticlesLoaded = event => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async engine => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
</script>

<Particles
    id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>

 