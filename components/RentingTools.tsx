export default function RentingTools() {
  return (
    <section className="py-20 bg-[#ededd9] text-[#5c3a1e] font-inter">
      {/* Watermark (fixed & centered) */}
      <img
        src="jain-logo.png"
        alt="watermark"
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[500px] lg:w-[600px] 
                   -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px] 
                   pointer-events-none z-0"
      />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Download Form */}
        <div>
          <h2 className="text-3xl font-bold">Rental Tools & Downloads</h2>
          <p className="mb-6 text-lg mt-10">
            Start your rental process with clarity. Download essential documents and proceed with confidence.
          </p>
          <a
            href="/docs/undertaking-form.pdf"
            download
            className="inline-block bg-[#8c6239] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5c3a1e] transition mt-2"
          >
            Download Undertaking Form
          </a>
        </div>

         {/* Right: Editable Contacts */}
        <div>
          <h3 className="text-3xl font-bold mb-4 z-10">Your Speed Dial!</h3>
          <div className="space-y-6">
            <div className="bg-[#f9f8f6]  p-6 rounded-xl shadow border border-[#e0ddd9] text-lg mt-10 relative z - 10">
              <p className="font-bold text-xl ">Shipra Jain Arya</p>
              <p className="text-gray-700">+91 97119 09677 | Founder and Chief Consultant</p>
            </div>
            <div className="bg-[#f9f8f6] p-6 rounded-xl shadow border border-[#e0ddd9] text-lg relative z - 10">
              <p className="font-bold text-xl">Security Office - Godrej Infinity</p>
              <p className="text-gray-700">+91 91722 24307 | Move-in Queries / Security Clearances</p>
            </div>
            <div className="bg-[#f9f8f6] p-6 rounded-xl shadow border border-[#e0ddd9] text-lg relative z - 10 ">
              <p className="font-bold text-xl">Shifting in and out of the society?</p>
              <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                <li><strong>Help Desk:</strong> helpdesk@infinitychs.in</li>
                <li><strong>Property Manager:</strong> propertymanager@infinitychs.in</li>
                <li><strong>Managing Committee:</strong> mc@infinitychs.in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}