export default function ContactUs() {
  return (
    <section id = "contact" className="py-20 bg-[#e1c08d] text-center text-[#5c3a1e] font-inter">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
        <p className="mb-12 text-2xl">Have questions or want to get started? Reach out to us directly.</p>

        <div className="space-y-4">
          <a href="tel:+919711909677" className="block text-2xl hover:text-[#d8c6b1]"> +91 97119 09677</a>
          <a href="mailto:shiprajainarya@gmail.com" className="block text-2xl hover:text-[#d8c6b1]">shiprajainarya@gmail.com</a>
          <a href="https://instagram.com/shiprajainarya" target="_blank" className="block text-2xl hover:text-[#d8c6b1]"> @shiprajainarya</a>
        </div>
      </div>
    </section>
  );
}