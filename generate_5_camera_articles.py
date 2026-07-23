import os
from datetime import datetime

base_dir = r"c:\Users\DHARMENDAR\OneDrive\Desktop\moviesfun\movie-site"

articles = [
    {
        "filename": "180-degree-rule-cinematography-explained.html",
        "title": "The 180-Degree Rule Explained: Why Breaking This Camera Rule Confuses the Audience",
        "desc": "Discover the invisible line that governs all of cinema. Learn why breaking the 180-degree rule instantly disorients viewers during dialogue scenes.",
        "content": """
            <h2>The Invisible Line of Cinema</h2>
            <p>Have you ever watched a movie and suddenly felt confused about where the characters were standing? You might not have realized it, but the director probably just broke the 180-degree rule. This is the most fundamental, unbreakable rule in all of cinematography, and understanding it will completely change how you watch movies.</p>
            
            <h3>What is the 180-Degree Rule?</h3>
            <p>Imagine two characters, Alice and Bob, standing facing each other and talking. Now, draw an imaginary straight line connecting their heads. The 180-degree rule states that the camera must stay on <em>one side</em> of that invisible line for the entire scene.</p>
            <p>If the camera stays on the left side of the line, Alice will always be looking to the right of the screen, and Bob will always be looking to the left. When the editor cuts back and forth between them, our brains logically understand they are looking at each other.</p>

            <h3>What Happens When You Break It?</h3>
            <p>If the director suddenly moves the camera to the <em>other side</em> of that invisible line (crossing the 180-degree line), Alice is now suddenly looking to the left, and Bob is also looking to the left. When the editor cuts the shots together, it looks like Alice and Bob are both staring off into the same direction, ignoring each other.</p>
            <p>This instantly shatters the geography of the scene. The audience's brain short-circuits for a split second, trying to figure out if someone moved. It pulls the viewer right out of the emotional reality of the film.</p>

            <h3>Why Directors Sometimes Break It on Purpose</h3>
            <p>While film school students are taught never to break it, master directors sometimes do it intentionally. In Stanley Kubrick's <em>The Shining</em>, he frequently crosses the line during conversations to create a deep, subconscious feeling of unease and disorientation in the viewer. When done perfectly, breaking the rule is a powerful psychological tool.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: How do you safely move the camera to the other side of the line?</strong><br>
                A: If a director needs to cross the line, they will usually do it during a single, continuous shot where the camera physically moves across the line while recording. Because the audience sees the movement, their brain easily adjusts to the new geography.
            </div>
        """
    },
    {
        "filename": "imax-vs-standard-cinema-cameras-difference.html",
        "title": "IMAX vs. Standard Cinema Cameras: The Mind-Blowing Difference in How Blockbusters Are Shot",
        "desc": "Why do Christopher Nolan movies look so different? Dive into the massive technical and visual differences between IMAX cameras and standard cinema cameras.",
        "content": """
            <h2>The Heavyweight Champions of Cinematography</h2>
            <p>When you sit in a massive theater to watch a movie like <em>Oppenheimer</em> or <em>Dune</em>, the image isn't just bigger—it feels infinitely more detailed, immersive, and majestic. This isn't just movie magic; it is the physical result of shooting on 70mm IMAX cameras compared to standard 35mm or digital cinema cameras.</p>

            <h3>Size Actually Matters</h3>
            <p>The secret to IMAX is the physical size of the film negative. A standard cinema camera (like a 35mm Panavision) exposes a strip of film that is 35 millimeters wide. An IMAX camera shoots on film that is 70mm wide, and it runs through the camera horizontally, making the actual image area roughly <strong>10 times larger</strong> than standard 35mm film.</p>
            <p>Because the physical "canvas" capturing the light is 10 times larger, it captures an insane amount of resolution. If you digitized an analog 70mm IMAX frame, it would equal roughly 18K resolution—far beyond the 4K TVs sitting in our living rooms.</p>

            <h3>The Aspect Ratio Shift</h3>
            <p>Standard movies are usually shot in a "widescreen" aspect ratio (like a long rectangle). But true IMAX film is almost square-shaped (a 1.43:1 ratio). This is why, when you watch an IMAX movie, the black bars at the top and bottom of the screen suddenly disappear, and the image expands to fill your entire peripheral vision. It makes you feel like you are falling into the movie.</p>

            <h3>Why Isn't Every Movie Shot in IMAX?</h3>
            <p>If IMAX looks so incredibly good, why doesn't every director use it? The answer is logistics and money.</p>
            <ul>
                <li><strong>The Noise:</strong> IMAX cameras sound like a running chainsaw. They are so incredibly loud that you cannot record usable dialogue while the camera is rolling. Actors have to re-record their lines in a studio later (ADR).</li>
                <li><strong>The Weight:</strong> An IMAX camera is essentially a heavy, bulky refrigerator. You cannot easily mount it on a Steadicam or run around with it.</li>
                <li><strong>The Cost:</strong> A single reel of IMAX film only holds about 3 minutes of footage and costs thousands of dollars to buy and develop.</li>
            </ul>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Are all IMAX movies shot on real film?</strong><br>
                A: No. Today, there are "IMAX Certified" digital cameras (like the ARRI Alexa LF) which are much lighter and quieter, but purists like Christopher Nolan still insist on using the massive, mechanical 70mm film cameras.
            </div>
        """
    },
    {
        "filename": "rule-of-thirds-cinematography-psychology.html",
        "title": "The Rule of Thirds in Cinematography: How Directors Psychologically Manipulate Your Eyes",
        "desc": "It is the most famous rule in photography and film. Learn how the Rule of Thirds dictates where your eyes look and how it makes a movie feel professional.",
        "content": """
            <h2>The Grid Inside Your Brain</h2>
            <p>Take your phone out, open the camera app, and turn on the "grid" feature. You will see two vertical lines and two horizontal lines, dividing your screen into nine equal squares. You are looking at the <strong>Rule of Thirds</strong>—the most fundamental composition technique in visual art and cinema.</p>

            <h3>Why Do We Use It?</h3>
            <p>Human instinct suggests that if something is important, we should put it dead center in the frame. But in cinematography, placing a subject directly in the center often feels static, boring, and unnatural (like a driver's license photo). The Rule of Thirds forces the cinematographer to place the subject off-center, aligning them with the intersecting lines of the grid.</p>
            <p>Placing an actor's eyes on the top horizontal third line instantly makes the shot feel balanced, dynamic, and pleasing to the human eye. It gives the character "looking room"—empty space in the frame for them to gaze into.</p>

            <h3>Manipulating Power Dynamics</h3>
            <p>Directors use the Rule of Thirds to silently tell you who has the power in a scene.</p>
            <ul>
                <li><strong>High Positioning:</strong> If a villain's eyes are placed on the top-third line, and they are looking down at a hero placed on the bottom-third line, the villain subconsciously feels dominant and towering.</li>
                <li><strong>Short-Sighting:</strong> Usually, you leave empty space in front of an actor's face. But if a director frames an actor on the right-third line, and has them stare directly into the right edge of the screen (leaving all the empty space behind their head), it creates an immediate feeling of claustrophobia, being trapped, or impending doom.</li>
            </ul>

            <h3>Breaking the Rule for Effect</h3>
            <p>Like all rules in cinema, the Rule of Thirds is meant to be broken once you master it. Director Wes Anderson famously ignores it entirely. He shoots almost all of his movies with perfect, dead-center symmetry. Because we are so used to the Rule of Thirds, Wes Anderson's center-framed shots feel distinctively quirky, artificial, and like a storybook coming to life.</p>
        """
    },
    {
        "filename": "hollywood-film-cameras-vs-digital-dominance.html",
        "title": "Why Hollywood Still Shoots on Expensive Film Cameras in the Age of Digital Dominance",
        "desc": "Digital cameras are cheaper, faster, and easier to use. So why do elite directors still insist on shooting physical, expensive analog film?",
        "content": """
            <h2>The Analog Resistance in a Digital World</h2>
            <p>Today, you can buy a digital cinema camera that shoots flawless 8K resolution, records to a hard drive instantly, and can see perfectly in the dark. It is cheaper, faster, and infinitely easier to manage. Yet, elite directors like Quentin Tarantino, Steven Spielberg, and Paul Thomas Anderson refuse to abandon physical, analog 35mm film. Why?</p>

            <h3>The Magic of "Film Grain"</h3>
            <p>Digital sensors capture reality as a grid of perfect, identical, square pixels. It is clinically sharp. Analog film, however, captures reality using thousands of microscopic, randomly scattered silver halide crystals. This creates "film grain."</p>
            <p>This random grain structure means that no two frames of a movie are ever exactly alike. The image literally breathes. It feels organic, warm, and alive in a way that perfect digital pixels simply cannot replicate. It softens skin tones and makes actors look distinctly "cinematic."</p>

            <h3>Highlight Roll-Off (Protecting the Sun)</h3>
            <p>When you point a digital camera at the sun, the bright areas instantly turn into a harsh, clipping, pure-white block. Digital sensors do not handle extreme brightness well. Analog film handles extreme brightness beautifully. It gently "rolls off" the highlights, creating a soft, blooming glow around bright lights and skies that is incredibly pleasing to the human eye.</p>

            <h3>The Discipline of the Magazine</h3>
            <p>Shooting on digital means you can roll the camera for hours without stopping. While this sounds great, it makes directors and actors lazy. They shoot endless takes hoping they "find the magic" eventually.</p>
            <p>A reel of 35mm film only lasts about 10 minutes and costs hundreds of dollars every time you press record. When the director yells "Action!" on a film set, you can literally hear the money burning through the camera gate. This creates an intense psychological discipline. Actors focus harder. The crew doesn't make mistakes. The pressure of shooting on film forces everyone to be at the absolute peak of their craft.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: How do we watch film movies on Netflix?</strong><br>
                A: The physical film is developed in a chemical lab, and then fed through a massive, high-end scanner that digitizes the physical film grain into a massive video file for digital projection and streaming.
            </div>
        """
    },
    {
        "filename": "depth-of-field-trick-cinematography-focus.html",
        "title": "The Depth of Field Trick: How Cinematographers Use Focus to Tell You Exactly What to Feel",
        "desc": "Notice how the background in movies is beautifully blurry? Learn the science and psychology behind 'Depth of Field' in professional filmmaking.",
        "content": """
            <h2>The Blurry Background Magic</h2>
            <p>If you take a video with your smartphone, everything from the person in front of you to the mountains five miles away is usually in sharp focus. But when you watch a massive Hollywood movie, the actor's eyes are razor-sharp, while the background melts away into a beautiful, creamy blur. This is called a "Shallow Depth of Field," and it is the ultimate tool for visual storytelling.</p>

            <h3>What is Depth of Field?</h3>
            <p>Depth of Field simply refers to how much of the image (from front to back) is actually in focus. Cinematographers control this using three things: the physical size of the camera sensor, the focal length of the lens, and the "Aperture" (how wide the iris inside the lens opens to let in light).</p>

            <h3>Directing Your Eyes</h3>
            <p>A director uses shallow depth of field to violently force your brain to look exactly where they want you to look. If two people are in a crowded, chaotic restaurant, the director will open the lens wide. Suddenly, the 50 extras in the background become a soft wash of blurry colors (called <em>bokeh</em>). You literally cannot look at anything except the actor's face. The director has isolated the character from their environment using physics.</p>

            <h3>The Rack Focus</h3>
            <p>One of the most satisfying visual tricks in cinema is the "Rack Focus." Imagine a character looking at their phone in the foreground, out of focus. Behind them, in sharp focus, a killer creeps into the room. Suddenly, the focus shifts—the killer blurs out, and the character's terrified face on the phone becomes sharp. The camera didn't move an inch, but the cinematographer just forced your brain to shift its entire narrative attention from one subject to another.</p>

            <h3>Deep Focus: The Opposite Extreme</h3>
            <p>Sometimes, directors want infinite focus (Deep Focus). Director Gregg Toland pioneered this in <em>Citizen Kane</em>. By blasting the set with massive amounts of light and closing the lens aperture, everything from the foreground to the deepest background was perfectly sharp. This allows the audience to choose where to look, making the environment just as important as the characters.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Why do smartphones now have "Cinematic Mode"?</strong><br>
                A: Because smartphone camera sensors are physically too small to create real background blur naturally, Apple and Android use artificial intelligence to cut out the person and digitally fake the blur to mimic expensive cinema lenses.
            </div>
        """
    }
]

# The Author box added to the end of every article to boost E-E-A-T
author_box = """
<div style="margin-top: 50px; padding: 25px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 16px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
    <img src="https://ui-avatars.com/api/?name=Movies+Fun&background=e50914&color=fff&size=80&rounded=true" alt="Author" style="width:80px; height:80px; border-radius:50%; border:2px solid var(--accent);">
    <div style="flex:1; min-width:200px;">
        <h4 style="margin:0 0 5px; color:#fff; font-size:1.1rem;">Written by Dharmendar</h4>
        <p style="margin:0; font-size:0.9rem; color:var(--muted); line-height:1.5;">Dharmendar is a hardcore cinema aficionado and the founder of MoviesFun. With a deep passion for filmmaking logistics, South Indian blockbusters, and Hollywood lore, he spends his time analyzing the secrets behind the camera to bring you the best movie insights and recommendations.</p>
    </div>
</div>
"""

# 1. Generate individual HTML files
for art in articles:
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{art['title']} | MoviesFun</title>
    <meta name="description" content="{art['desc']}">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg?v=2">
    <style>
        *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
        :root {{ --bg:#0d0d0d; --surface:#181818; --border:#2a2a2a; --accent:#e50914; --text:#f0f0f0; --muted:#999; }}
        body {{ background:var(--bg); color:var(--text); font-family:'Mulish',sans-serif; line-height:1.8; }}
        .navbar {{ background:rgba(13,13,13,0.97); border-bottom:1px solid var(--border); display:flex; align-items:center; padding:0 28px; height:66px; position:sticky; top:0; z-index:100; }}
        .brand {{ display:flex; align-items:center; gap:9px; text-decoration:none; font-size:1.5rem; font-weight:900; color:#fff; }}
        .brand i, .brand span b {{ color:var(--accent); }}
        .container {{ max-width:800px; margin:40px auto; padding:0 24px 60px; }}
        .back-btn {{ display:inline-flex; align-items:center; gap:8px; color:var(--muted); text-decoration:none; font-weight:700; margin-bottom:30px; transition:color 0.2s; font-size:.95rem; }}
        .back-btn:hover {{ color:var(--accent); }}
        .article-title {{ font-size:clamp(1.8rem, 4vw, 2.5rem); font-weight:900; color:#fff; margin-bottom:16px; line-height:1.2; }}
        .article-meta {{ display:flex; gap:16px; color:var(--muted); font-size:0.9rem; margin-bottom:36px; padding-bottom:20px; border-bottom:1px solid var(--border); }}
        .article-meta span {{ display:flex; align-items:center; gap:6px; }}
        .content h2 {{ color:#fff; font-size:1.6rem; margin:36px 0 16px; border-left:4px solid var(--accent); padding-left:14px; }}
        .content h3 {{ color:#fff; font-size:1.3rem; margin:28px 0 12px; }}
        .content p {{ margin-bottom:20px; color:#d1d1d1; font-size:1.05rem; }}
        .content ul {{ margin-bottom:20px; padding-left:24px; color:#d1d1d1; font-size:1.05rem; }}
        .content li {{ margin-bottom:10px; }}
        footer {{ background:var(--surface); border-top:1px solid var(--border); text-align:center; padding:30px 20px; margin-top:40px; }}
        .footer-links {{ display:flex; justify-content:center; gap:18px; flex-wrap:wrap; margin-bottom:14px; }}
        .footer-links a {{ color:var(--muted); text-decoration:none; font-size:.88rem; transition:color .2s; }}
        .footer-links a:hover {{ color:var(--accent); }}
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
        <h1 class="article-title">{art['title']}</h1>
        <div class="article-meta">
            <span><i class="far fa-calendar"></i> {datetime.now().strftime("%B %d, %Y")}</span>
            <span><i class="far fa-folder"></i> Camera & Cinematography</span>
        </div>
        <div class="content">
            {art['content']}
            {author_box}
        </div>
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
        <p style="color:var(--muted); font-size:.85rem;">🎬 <strong>MoviesFun</strong> &copy; 2026</p>
    </footer>
</body>
</html>
"""
    with open(os.path.join(base_dir, art['filename']), 'w', encoding='utf-8') as f:
        f.write(html)

# 2. Inject into index.html
index_path = os.path.join(base_dir, 'index.html')
with open(index_path, 'r', encoding='utf-8') as f:
    index_html = f.read()

# Build the new links
new_links = ""
for art in articles:
    new_links += f'''
        <a href="{art['filename']}" style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; color:#fff; text-decoration:none; display:block; transition:transform 0.2s, border-color 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='rgba(229,9,20,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--border)';">
            <h3 style="margin-bottom:8px; font-size:1.15rem; color:#fff;"><i class="fas fa-bolt" style="color:var(--accent); margin-right:8px;"></i>{art['title']}</h3>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:12px;">{art['desc']}</p>
            <span style="color:var(--accent); font-weight:700; font-size:0.9rem;">Read More <i class="fas fa-arrow-right" style="margin-left:4px;"></i></span>
        </a>'''

# Find the insertion point in index.html (inside the Articles & News grid)
insert_marker = '<div style="display:flex; flex-direction:column; gap:16px; padding: 0 24px;">'
if insert_marker in index_html:
    index_html = index_html.replace(insert_marker, insert_marker + new_links)
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_html)
    print("Injected 5 articles into index.html")
else:
    print("WARNING: Could not find insertion point in index.html")

# 3. Update sitemap.xml
sitemap_path = os.path.join(base_dir, 'sitemap.xml')
with open(sitemap_path, 'r', encoding='utf-8') as f:
    sitemap = f.read()

sitemap_urls = ""
today = datetime.now().strftime("%Y-%m-%d")
for art in articles:
    sitemap_urls += f'''
  <url>
    <loc>https://www.moviesfun.in/{art['filename']}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>'''

if '</urlset>' in sitemap:
    sitemap = sitemap.replace('</urlset>', sitemap_urls + '\n</urlset>')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap)
    print("Injected 5 articles into sitemap.xml")
else:
    print("WARNING: Could not find closing urlset in sitemap.xml")

print("Done generating 5 cinema camera articles!")
