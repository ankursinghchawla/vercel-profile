/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DP3NealoYMH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#6B46C1]">Deluxe Cat Tree 🐱</h3>
          <p className="text-muted-foreground mt-2">
            A luxurious cat tree with multiple platforms and scratching posts for your feline friend to play and rest.
            🐱
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="font-medium">Height:</span> 72 inches
            </li>
            <li>
              <span className="font-medium">Platforms:</span> 3
            </li>
            <li>
              <span className="font-medium">Scratching Posts:</span> 2
            </li>
          </ul>
        </div>
        <img
          src="/placeholder.svg"
          alt="Cat Tree 1"
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#6B46C1]">Premium Cat Tower 🐱</h3>
          <p className="text-muted-foreground mt-2">
            A modern and stylish cat tree with a cozy hammock and multiple scratching surfaces. 🐱
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="font-medium">Height:</span> 60 inches
            </li>
            <li>
              <span className="font-medium">Platforms:</span> 2
            </li>
            <li>
              <span className="font-medium">Scratching Posts:</span> 3
            </li>
          </ul>
        </div>
        <img
          src="/placeholder.svg"
          alt="Cat Tree 2"
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#6B46C1]">Compact Cat Condo 🐱</h3>
          <p className="text-muted-foreground mt-2">
            A space-saving cat tree with a cozy perch and a sturdy scratching post. 🐱
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="font-medium">Height:</span> 48 inches
            </li>
            <li>
              <span className="font-medium">Platforms:</span> 1
            </li>
            <li>
              <span className="font-medium">Scratching Posts:</span> 1
            </li>
          </ul>
        </div>
        <img
          src="/placeholder.svg"
          alt="Cat Tree 3"
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </div>
    </section>
  )
}
