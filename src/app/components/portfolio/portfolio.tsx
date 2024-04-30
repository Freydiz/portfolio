/**
 *
 * TODO: Create a Portfolio component that displays a list of latest projects.
 */

export const Portfolio: React.FC = () => (
  <section className="bg-white py-8">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center">Portfolio</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="shadow-lg p-4">Project 1</div>
        <div className="shadow-lg p-4">Project 2</div>
        <div className="shadow-lg p-4">Project 3</div>
      </div>
    </div>
  </section>
);
