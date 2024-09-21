import {useRef} from "react";
import  {useState} from "react";
import  emailjs from '@emailjs/browser'
import {all} from "three/src/nodes/math/MathNode.js";
const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = ({target: { name, value}}) =>{
        setForm({...form, [name]: value});
    }

    //service_0svka0y
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
        await emailjs.send(
            'service_5uyszva',
            'template_8wv2569',
            {
                from_name: form.name,
                to_name: 'Abdul',
                from_email: form.email,
                to_email: 'abdulgaffar7274@gmail.com',
                message: form.message,
            },
            '6LTIEHljtJwuZStGT'
            )

            setLoading(false);
        alert('Your message has been sent!');
        setForm({
            name: '',
            email: '',
            password: '',
        });
        } catch (error) {
            console.error(error);
            alert('Something went wrong!');
        }

    }

    return (
        <section className='c-space my-20' id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
            <h3 className="head-text">Contact Me </h3>
                    <p className="text-lg text-white-600 mt-3">Whether you&apos;re looking to building a new website , improve your existing platform, or bring a unique project to life, I&apos;m here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="johnDoe@example.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">YOur Message</span>
                            <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I'm intrested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>{loading ? 'sending... ' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
