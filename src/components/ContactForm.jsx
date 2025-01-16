import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "İsim zorunlu";
    if (!formData.email) {
      errors.email = "Email zorunlu";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email hatalı";
    }
    if (!formData.message) errors.message = "Mesaj zorunlu";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);  // 3000 ms = 3 saniye
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send("service_elg53d2", "template_z2443l4", formData, "iNRNaaE_UUFuIvXe_")
        .then(() => {
            toast.success("Mesaj Başarıyla Gönderildi !");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
            toast.error("Mesaj gönderirken hata oluştu. Lütfen tekrar deneyiniz !");
        })
        .finally(() => {
            setIsSending(false);
        });

    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">İletişim</h2>
      <motion.form 
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration: 0.8, delay: 0.7}}
      onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="İsim"
              onChange={handleChange}
              className="mb-8 w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
             className="text-sm text-rose-800">{errors.name}</motion.p>}
          </div>
          <div className="lg:w-1/2">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && <motion.p 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
            className="text-sm text-rose-800">{errors.email}</motion.p>}
          </div>
        </div>
        <div className="mb-8">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Mesaj"
            onChange={handleChange}
            className="mb-8 w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows={6}
          />
          {errors.message && <motion.p 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
          className="text-sm text-rose-800">{errors.message}</motion.p>}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Gönderiliyor..." : "Gönder"}
          <FiSend />
        </div>
        </button>
       
      </motion.form>
    </div>
  );
};

export default ContactForm;
