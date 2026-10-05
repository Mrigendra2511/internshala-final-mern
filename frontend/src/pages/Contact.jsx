import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks ${name}! Your message has been received. (Demo form)`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="bg-[#fafafa] min-h-screen py-12 px-4">
      <div className="max-w-[1000px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">
            Contact <span className="text-[#008bdc]">Us</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Have a question? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#333] mb-4">Get in touch</h2>

            <div className="space-y-4 text-gray-600 text-sm leading-6">
              <p>
                <span className="font-semibold text-[#333]">Email:</span><br />
                support@internshala-clone.com
              </p>

              <p>
                <span className="font-semibold text-[#333]">Phone:</span><br />
                +91-99999-99999
              </p>

              <p>
                <span className="font-semibold text-[#333]">Office:</span><br />
                Internshala Clone HQ<br />
                India (Remote-first team)
              </p>

              <p className="pt-2">
                For internship support, account issues, or feedback — drop us a message
                and we’ll get back as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#333] mb-4">Send a message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#008bdc] text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#008bdc] text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#008bdc] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#008bdc] text-white font-semibold py-2.5 rounded-lg hover:bg-[#0670b8] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact