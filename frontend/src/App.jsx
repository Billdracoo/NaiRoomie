 import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">NaiRoomie</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Sign Up</a>
          <a href="#" className="hover:underline">Log In</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Find your next student home in Nairobi—safe, verified, and budget-friendly
        </h2>
        <div className="my-4 flex justify-center gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Search Listings</button>
          <button className="border border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-100">Post Your Unit</button>
        </div>
        {/* Map Image Placeholder */}
        <div className="mt-6 flex justify-center">
          <img src="/map-placeholder.png" alt="Map" className="max-w-xs md:max-w-sm" />
        </div>
      </section>

      {/* Core Features */}
      <section className="p-6">
        <h3 className="text-xl font-semibold mb-4">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Feature Cards */}
          <FeatureCard title="Interactive Map Integration" icon="📍"
            desc="Students can explore residential units by neighborhood, distance to campuses." />

          <FeatureCard title="Verified Listings" icon="📄"
            desc="Partnered landlords or agents ensure student-friendly, up-to-date listings." />

          <FeatureCard title="Search Filters Tailored to Students" icon="🔍"
            desc="Filter by rent, furnished-status, roommates preferred, and Wi-Fi availability." />

          <FeatureCard title="Peer Reviews & Ratings" icon="⭐"
            desc="Past tenants leave reviews to help new students make safe choices." />

          <FeatureCard title="Find a Roommate » Matchmaker" icon="👥"
            desc="Create profiles and match based on habits, schedules, and location." />
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, desc, icon }) {
  return (
    <div className="border p-4 rounded shadow-sm flex items-start gap-4">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default App;
