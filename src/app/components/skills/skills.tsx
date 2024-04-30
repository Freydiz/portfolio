export const Skills: React.FC = () => (
  <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center">My Skills</h2>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-4 shadow">React</div>
        <div className="bg-white p-4 shadow">Next.js</div>
        <div className="bg-white p-4 shadow">Node.js</div>
        <div className="bg-white p-4 shadow">TypeScript</div>
        <div className="bg-white p-4 shadow">Tailwind CSS</div>
        <div className="bg-white p-4 shadow">GraphQL</div>
      </div>
    </div>
  </section>
);
