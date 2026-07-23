import os

base_dir = r"c:\Users\DHARMENDAR\OneDrive\Desktop\moviesfun\movie-site"

head_and_nav = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- PRIMARY SEO -->
    <title>{TITLE}</title>
    <meta name="description" content="{DESC}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="MoviesFun">
    
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg?v=2">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --bg:#0d0d0d; --surface:#181818; --border:#2a2a2a; --accent:#e50914; --text:#f0f0f0; --muted:#999; }
        body { background:var(--bg); color:var(--text); font-family:'Mulish',sans-serif; line-height:1.8; }
        .navbar { background:rgba(13,13,13,0.97); border-bottom:1px solid var(--border); display:flex; align-items:center; padding:0 28px; height:66px; position:sticky; top:0; z-index:100; }
        .brand { display:flex; align-items:center; gap:9px; text-decoration:none; font-size:1.5rem; font-weight:900; color:#fff; }
        .brand i { color:var(--accent); }
        .brand span b { color:var(--accent); }
        .container { max-width:820px; margin:60px auto; padding:0 24px 60px; }
        .back-btn { display:inline-flex; align-items:center; gap:8px; color:var(--muted); text-decoration:none; font-weight:700; margin-bottom:36px; transition:color 0.2s; font-size:.95rem; }
        .back-btn:hover { color:var(--accent); }
        .page-header { margin-bottom:40px; padding-bottom:24px; border-bottom:2px solid var(--accent); }
        .page-header h1 { font-size:2.6rem; font-weight:900; color:#fff; margin-bottom:8px; }
        .page-header .sub { color:var(--muted); font-size:1rem; }
        .card { background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:36px; margin-bottom:28px; transition: transform 0.2s; }
        .card:hover { transform: translateY(-3px); border-color: rgba(229,9,20,0.4); }
        .card h2 { font-size:1.3rem; font-weight:800; color:#fff; margin-bottom:14px; display:flex; align-items:center; gap:10px; }
        .card h2 i { color:var(--accent); font-size:1.1rem; }
        .card p { color:var(--muted); font-size:1rem; margin-bottom:14px; }
        .card p:last-child { margin-bottom:0; }
        .card ul { color:var(--muted); font-size:1rem; padding-left:22px; margin-bottom:14px; }
        .card ul li { margin-bottom:8px; }
        .contact-box { background: rgba(255,255,255,0.03); border: 1px dashed var(--border); padding: 20px; border-radius: 12px; margin-top: 20px; text-align: center; }
        .contact-box a { color: var(--accent); font-size: 1.2rem; font-weight: 700; text-decoration: none; }
        .contact-box a:hover { text-decoration: underline; }
        footer { background:var(--surface); border-top:1px solid var(--border); text-align:center; padding:30px 20px; }
        .footer-links { display:flex; justify-content:center; gap:18px; flex-wrap:wrap; margin-bottom:14px; }
        .footer-links a { color:var(--muted); text-decoration:none; font-size:.88rem; transition:color .2s; }
        .footer-links a:hover { color:var(--accent); }
        footer p { color:var(--muted); font-size:.85rem; }
        footer a { color:var(--accent); text-decoration:none; }
    </style>
</head>
<body>
<nav class="navbar">
    <a class="brand" href="index.html">
        <i class="fas fa-film"></i>
        <span><span style="color:#ffffff;">Movies</span><b>Fun</b></span>
    </a>
</nav>

<div class="container">
    <a href="index.html" class="back-btn"><i class="fas fa-arrow-left"></i> Back to Home</a>
"""

footer = """
</div>

<footer>
    <div class="footer-links">
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="disclaimer.html">Disclaimer</a>
        <a href="dmca.html">DMCA</a>
        <a href="privacy-Policy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
    </div>
    <p>🎬 <strong>MoviesFun</strong> - All movies stream from <a href="https://youtube.com" target="_blank">YouTube</a> official channels. &copy; 2026 MoviesFun</p>
</footer>
</body>
</html>
"""

# ----------------- CONTACT US -----------------
contact_content = head_and_nav.replace("{TITLE}", "Contact Us - MoviesFun | Get in Touch").replace("{DESC}", "Have a question, feedback, or a movie request? Contact the MoviesFun team easily.") + """
    <div class="page-header">
        <h1>Contact Us</h1>
        <p class="sub">We'd love to hear from you! Reach out for movie requests, feedback, or business inquiries.</p>
    </div>

    <div class="card">
        <h2><i class="fas fa-envelope-open-text"></i> Let's Connect</h2>
        <p>At <strong>MoviesFun</strong>, our community comes first. Whether you have a suggestion to improve our website, a specific Hindi dubbed movie you're dying to see added, or just want to say hi, we are always here to listen.</p>
        <p>Because we're a small, passionate team of movie lovers, we personally read every single message we receive. While we might not be able to reply instantly, we promise to get back to you as quickly as humanly possible.</p>
    </div>

    <div class="card">
        <h2><i class="fas fa-paper-plane"></i> How to Reach Us</h2>
        <p>The fastest and most reliable way to get in touch with our team is via email. Feel free to drop us a line anytime!</p>
        <div class="contact-box">
            <p style="margin-bottom: 5px; color: #fff; font-weight: 600;">Email us directly at:</p>
            <a href="mailto:contact@moviesfun.in">contact@moviesfun.in</a>
        </div>
    </div>

    <div class="card">
        <h2><i class="fas fa-handshake"></i> Business & Partnerships</h2>
        <p>Are you a brand, a YouTube channel owner, or a copyright holder looking to collaborate? We are always open to exciting partnerships that benefit our audience of hardcore movie fans.</p>
        <p>If you represent an official movie production house and want us to feature your legally uploaded YouTube content on our homepage, please reach out to our business team with the subject line <strong>"Partnership Inquiry"</strong>.</p>
    </div>
""" + footer

with open(os.path.join(base_dir, "contact.html"), "w", encoding="utf-8") as f:
    f.write(contact_content)


# ----------------- DMCA -----------------
dmca_content = head_and_nav.replace("{TITLE}", "DMCA & Copyright Policy - MoviesFun").replace("{DESC}", "Read the MoviesFun DMCA Copyright Policy. Learn how we handle copyright claims and our strict adherence to indexing only authorized YouTube videos.") + """
    <div class="page-header">
        <h1>DMCA Copyright Policy</h1>
        <p class="sub">Our strict commitment to respecting creators and copyright holders.</p>
    </div>

    <div class="card">
        <h2><i class="fas fa-shield-alt"></i> Our Commitment to Creators</h2>
        <p>At <strong>MoviesFun</strong>, we have a profound respect for the hard work, money, and creativity that goes into making movies. We strongly believe that filmmakers, actors, and production houses deserve to be protected and compensated for their art.</p>
        <p>It is our strict policy to respond rapidly to clear notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (DMCA). If you are a copyright owner or an authorized agent, and you believe any content indexed on our site infringes upon your copyrights, we are here to cooperate fully.</p>
    </div>

    <div class="card">
        <h2><i class="fas fa-server"></i> How MoviesFun Works</h2>
        <p>Before submitting a takedown request, please understand the technical nature of our platform:</p>
        <ul>
            <li><strong>We Do Not Host Files:</strong> MoviesFun does not host, upload, or store any video files, media, or movies on our own servers.</li>
            <li><strong>We Are a Search Index:</strong> Our website acts strictly as a directory or search engine. We only embed or link to videos that have already been uploaded to third-party public platforms, primarily <strong>YouTube</strong>.</li>
            <li><strong>Takedowns at the Source:</strong> Because we embed YouTube videos, taking down a page on MoviesFun will <em>not</em> remove the video from the internet. To permanently remove the video, you must contact YouTube directly. Once a video is removed from YouTube, our embed will automatically stop working.</li>
        </ul>
    </div>

    <div class="card">
        <h2><i class="fas fa-file-signature"></i> Submit a Takedown Request</h2>
        <p>If you still wish to have an embedded link or page removed from our directory, we are more than happy to oblige. Please send a formal DMCA takedown notice containing the following information:</p>
        <ul>
            <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>The exact URL(s) on <strong>MoviesFun.in</strong> where the infringing material is located.</li>
            <li>Your contact information, including your name, address, telephone number, and an email address.</li>
            <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
        </ul>
        <div class="contact-box">
            <p style="margin-bottom: 5px; color: #fff; font-weight: 600;">Send your DMCA notices to:</p>
            <a href="mailto:dmca@moviesfun.in">dmca@moviesfun.in</a>
        </div>
        <p style="margin-top: 15px; font-size: 0.9rem;"><em>Please allow 2-3 business days for our compliance team to process your request and remove the specific pages.</em></p>
    </div>
""" + footer

with open(os.path.join(base_dir, "dmca.html"), "w", encoding="utf-8") as f:
    f.write(dmca_content)

print("contact.html and dmca.html generated successfully!")
