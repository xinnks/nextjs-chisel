import Image from 'next/image';

function HomePage() {
    return (
        <>
            <h1 style={{textAlign: "center", width: "100vw"}}>Welcome to the Next.js - Chiselstrike project</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Image
                    src={`/images/nextjs-logo.svg`}
                    height={80}
                    width={80}
                ></Image>
                <Image
                    src={`/images/chiselstrike-logo.svg`}
                    height={80}
                    width={80}
                ></Image>
            </div>
        </>
    )
}

export default HomePage;