import os
import re
from datetime import datetime

base_dir = r"c:\Users\DHARMENDAR\OneDrive\Desktop\moviesfun\movie-site"

articles = [
    {
        "filename": "hidden-hierarchy-film-set-organization.html",
        "title": "The Hidden Hierarchy: How a Film Set is Actually Organized",
        "desc": "Step behind the camera and discover the true hierarchy of a film set. Learn who really runs the show, from the director down to the best boy.",
        "content": """
            <h2>The Secret Ecosystem Behind the Camera</h2>
            <p>When you watch a blockbuster movie, you see the actors and maybe think of the director. But a modern film set is like a small city, operating under a strict and highly organized hierarchy. Without this hidden chain of command, the entire production would collapse into chaos.</p>
            
            <h3>Above the Line vs. Below the Line</h3>
            <p>In the film industry, crew members are divided into two distinct categories:</p>
            <ul>
                <li><strong>Above the Line:</strong> These are the creative and financial leads involved before the camera even rolls. This includes the Producers, Director, Screenwriters, and lead Actors. Their salaries are usually negotiated individually.</li>
                <li><strong>Below the Line:</strong> This refers to everyone else—the people who actually execute the vision. This includes the Director of Photography (DP), Gaffers, Grips, Production Designers, Sound Mixers, and Hair & Makeup artists.</li>
            </ul>

            <h3>Who Actually Runs the Set?</h3>
            <p>While the Director is the creative visionary, they don't actually manage the minute-to-minute operations of the set. That exhausting job falls to the <strong>First Assistant Director (1st AD)</strong>. The 1st AD is the timekeeper, the disciplinarian, and the chief operational officer. If the Director says, "I want a shot of a helicopter exploding," the 1st AD is the one screaming into a walkie-talkie to make sure the fire department is ready, the actors are safe, and they have exactly 15 minutes before they lose sunlight.</p>
            
            <h3>Departments that Make the Magic Happen</h3>
            <p>The set is broken down into highly specialized departments:</p>
            <ul>
                <li><strong>Camera Department:</strong> Led by the Director of Photography, they manage the lenses, lighting design, and camera movement.</li>
                <li><strong>Art Department:</strong> Led by the Production Designer, they are responsible for everything you see on screen—sets, props, and backgrounds.</li>
                <li><strong>Grip & Electric (G&E):</strong> The muscle of the set. Grips build camera rigs and shape light, while the Electricians (led by the Gaffer) provide the power and set up the actual lighting fixtures.</li>
            </ul>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Is the Director the highest authority on set?</strong><br>
                A: Creatively, yes. But financially and logistically, the Producer holds the ultimate power and can even fire the Director if the project goes over budget.<br><br>
                <strong>Q: What does a "Best Boy" do?</strong><br>
                A: The Best Boy is simply the second-in-command or chief assistant in either the Grip or Electric department. They handle hiring, equipment rentals, and paperwork so the Gaffer or Key Grip can stay on set.
            </div>
        """
    },
    {
        "filename": "real-role-of-movie-producer.html",
        "title": "The Real Role of a Movie Producer: It's Not Just About Money",
        "desc": "What does a movie producer actually do? It's far more than just writing checks. Discover the creative and logistical engine behind every film.",
        "content": """
            <h2>The Misunderstood Masterminds of Cinema</h2>
            <p>When the Academy Award for Best Picture is announced, the award is handed to the Producer, not the Director. Yet, the general public rarely understands what a Producer actually does, often confusing them with mere financiers who just write checks. In reality, Producers are the true parents of a film.</p>

            <h3>The Genesis of a Film</h3>
            <p>A Director might be hired months into a project, but the Producer is there from day one. They are the ones who find the script, buy the rights to a book, or hire a writer to develop an original idea. Without a Producer taking that initial leap, the movie simply never exists.</p>

            <h3>Finding the Money and the Talent</h3>
            <p>Yes, securing financing is a huge part of the job, but it is deeply tied to creativity. A Producer must pitch the movie to studios or independent investors. To do this, they "package" the film by attaching a reputable Director and bankable star Actors. They are master negotiators who bridge the gap between art and commerce.</p>

            <h3>The Chaos of Physical Production</h3>
            <p>Once the camera starts rolling, the Producer acts as the ultimate problem solver. If a hurricane destroys a set, the Director focuses on how to rewrite the scene, but the Producer has to figure out how to pay for a new set, negotiate with insurance companies, and keep the studio from shutting the movie down.</p>

            <h3>Types of Producers</h3>
            <p>You will see many Producer credits in a movie. Here is what they mean:</p>
            <ul>
                <li><strong>Executive Producer (EP):</strong> Often the person who secured the funding, or a major star who negotiated the credit, but they are rarely on set daily.</li>
                <li><strong>Line Producer:</strong> The logistical wizard. They manage the day-to-day budget, sign the checks, and make sure the crew gets fed.</li>
                <li><strong>Creative Producer:</strong> The lead producer who works with the director on script changes, casting, and editing decisions.</li>
            </ul>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Can a Producer fire a Director?</strong><br>
                A: Yes. Because the Producer represents the financial interests of the studio or investors, they have the authority to replace a Director if the film is falling apart or going wildly over budget.
            </div>
        """
    },
    {
        "filename": "director-vs-producer-who-controls-movie.html",
        "title": "Director vs. Producer: Who Really Controls the Movie?",
        "desc": "It's the oldest battle in Hollywood. Discover the intense power dynamic between Directors and Producers and who gets the final say.",
        "content": """
            <h2>The Hollywood Tug-of-War</h2>
            <p>Film is a collaborative medium, but at the top of the pyramid, there is often a fierce battle for control. The Director represents the artistic soul of the movie, while the Producer represents its financial and logistical reality. So, when push comes to shove, who actually calls the shots?</p>

            <h3>The Director's Domain: Creative Vision</h3>
            <p>Once on set, the Director is the undisputed captain of the ship. They dictate where the camera goes, how the actors deliver their lines, and the overall mood of the scene. The crew looks to the Director for creative answers. A good Producer will step back during filming and let the Director do their job, shielding them from studio interference.</p>

            <h3>The Producer's Domain: The Big Picture</h3>
            <p>However, the Producer is the CEO of the production. While the Director is focused on today's scenes, the Producer is looking at the entire schedule and budget. If a Director wants to shoot 20 takes of a simple dialogue scene, the Producer is the one who will eventually tap their watch and say, "We are moving on, or we can't afford tomorrow's explosion scene."</p>

            <h3>The Battle for "Final Cut"</h3>
            <p>The ultimate test of power is "Final Cut" privilege—the right to decide the final version of the movie released to the public. In Hollywood, the Studio and the Producers almost always retain Final Cut. They can take the movie away from the Director in the editing room and recut it completely. Only a handful of elite Directors (like Christopher Nolan or Steven Spielberg) have negotiated contractual Final Cut.</p>

            <h3>When Things Go Wrong</h3>
            <p>Hollywood history is filled with epic Director vs. Producer clashes. When a Director goes wildly over budget (as Francis Ford Coppola did on <em>Apocalypse Now</em>), the Producer has to step in. In worst-case scenarios, a Director is fired halfway through production and replaced by someone who will follow the Producer's schedule.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Why do some Directors also become Producers?</strong><br>
                A: To gain total control. By acting as their own Producer, a Director can protect their creative vision from studio interference and ensure they get the final say on the edit.
            </div>
        """
    },
    {
        "filename": "expensive-mistakes-on-film-set.html",
        "title": "The 5 Most Expensive Mistakes Ever Made on a Film Set",
        "desc": "From destroyed antique guitars to sunken sets, explore the costliest blunders in movie history that cost studios millions.",
        "content": """
            <h2>When "Action!" Turns Into a Financial Disaster</h2>
            <p>Filmmaking is a high-stakes gamble. With hundreds of people running around heavy machinery, explosives, and fragile props, mistakes are bound to happen. But when they happen on a Hollywood set, they can cost millions of dollars in a matter of seconds.</p>

            <h3>1. The Hateful Eight's Priceless Guitar</h3>
            <p>During the filming of Quentin Tarantino's <em>The Hateful Eight</em>, Kurt Russell's character aggressively smashes a guitar. The prop department had borrowed a priceless, 150-year-old Martin guitar from a museum. The plan was to swap it for a cheap replica before the smash. Nobody told Russell. He smashed the museum artifact to splinters. The museum was so furious they changed their policy and now refuse to lend antiques to movies.</p>

            <h3>2. The Waterworld Sinking Set</h3>
            <p>Kevin Costner's <em>Waterworld</em> was plagued with issues, mostly because they decided to shoot on the open ocean instead of a controlled water tank. One afternoon, a sudden storm rolled in and completely sank their multi-million dollar floating "atoll" set. Production was halted for weeks while they rebuilt it, causing the budget to spiral out of control.</p>

            <h3>3. Henry Cavill's CGI Mustache in Justice League</h3>
            <p>When Henry Cavill was called back for <em>Justice League</em> reshoots, he was already filming <em>Mission: Impossible - Fallout</em>, where he had grown a thick mustache. Paramount refused to let him shave it. Warner Bros. was forced to shoot his Superman scenes with the mustache and use CGI to digitally erase it frame-by-frame. The result looked terrible and cost the studio millions in VFX work.</p>

            <h3>4. The Back to the Future Recast</h3>
            <p>Actor Eric Stoltz originally played Marty McFly in <em>Back to the Future</em>. They shot for over five weeks before director Robert Zemeckis realized Stoltz was playing the role too dramatically, rather than for comedy. They fired him, hired Michael J. Fox, and had to completely reshoot five weeks of footage, costing an extra $3 million (a massive amount in 1985).</p>

            <h3>5. Roar: The Most Dangerous Movie Ever Made</h3>
            <p>The 1981 film <em>Roar</em> featured untrained, live lions and tigers roaming freely with the actors. It resulted in 70 members of the cast and crew being severely mauled, bitten, and injured. Sets were destroyed by floods, and the film took 11 years to complete, costing $17 million and only making $2 million at the box office.</p>
        """
    },
    {
        "filename": "indie-filmmakers-shoot-blockbusters-micro-budget.html",
        "title": "How Indie Filmmakers Shoot Blockbuster Scenes on a Micro-Budget",
        "desc": "No money? No problem. Discover the genius hacks and guerrilla filmmaking tactics indie directors use to make cheap movies look like $100M blockbusters.",
        "content": """
            <h2>The Art of Cinematic Illusion</h2>
            <p>Hollywood blockbusters rely on $200 million budgets, massive soundstages, and armies of VFX artists. But independent filmmakers have to rely on something much more powerful: pure, desperate ingenuity. Here is how indie directors trick the audience into seeing a blockbuster on a shoestring budget.</p>

            <h3>1. The "Company Move" Hack</h3>
            <p>Moving a film crew from one location to another (a "Company Move") wastes half a day of shooting and costs thousands in permits and transport. Indie filmmakers avoid this by finding one massive location—like an abandoned warehouse or an old school—and dressing different rooms to look like completely different locations (e.g., a hospital, a police station, and a bedroom, all in the same building).</p>

            <h3>2. Guerrilla Filmmaking</h3>
            <p>Can't afford a $10,000 permit to shut down a city street? Just shoot it anyway. Guerrilla filmmaking involves sneaking a small crew onto the streets, hiding the camera in a van or across the street with a long zoom lens, and having the actors perform in the middle of actual, confused pedestrians. (Note: This is highly illegal, but it's how many famous indie films were born).</p>

            <h3>3. "Poor Man's Process" for Car Scenes</h3>
            <p>Shooting actors talking inside a moving car usually requires a police escort, street closures, and a massive tow truck pulling the car. The indie hack? Park the car in a pitch-black garage. Have crew members gently rock the car bumper to simulate movement, whilst sweeping flashlights across the windshield to simulate passing streetlights. With tight camera angles, it looks 100% real on screen.</p>

            <h3>4. Relying on Practical Sound over Visuals</h3>
            <p>Showing a massive alien spaceship landing costs $100,000 in CGI. Showing an actor staring out a window in absolute terror, while the room shakes and an incredibly loud, bass-heavy sound effect of a spaceship roars through the theater speakers? That costs almost nothing, and is often much scarier.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: How do indie films get famous actors?</strong><br>
                A: By offering them a cut of the profits ("backend points") instead of a massive upfront salary, and by writing incredibly compelling, character-driven scripts that actors are desperate to perform.
            </div>
        """
    },
    {
        "filename": "why-movies-are-never-shot-in-order.html",
        "title": "The Chaos of Scheduling: Why Movies Are Never Shot in Order",
        "desc": "Think movies are filmed from start to finish? Think again. Uncover the logistical nightmare of film scheduling and out-of-sequence shooting.",
        "content": """
            <h2>The Chronological Illusion</h2>
            <p>When we watch a movie, we experience a seamless, chronological journey. The protagonist wakes up, goes on an adventure, and defeats the villain. But behind the scenes, that movie was shot in a wildly chaotic, out-of-order puzzle. A movie is almost never shot in chronological order.</p>

            <h3>It Is All About Locations</h3>
            <p>The primary reason films shoot out of sequence is location logistics. If a movie has scenes taking place in a specific coffee shop in Scene 2, Scene 45, and Scene 90, the production will not rent the coffee shop three separate times. They will rent it for one weekend and shoot all three scenes back-to-back, even if they happen years apart in the movie's timeline.</p>

            <h3>Actor Availability and Contracts</h3>
            <p>Famous actors are busy and expensive. If you hire a massive Hollywood star to play a supporting role, you might only be able to afford them for exactly 5 days. The 1st Assistant Director will schedule every single scene involving that star into those 5 days, regardless of where those scenes appear in the script.</p>

            <h3>The Acting Challenge</h3>
            <p>This creates a massive challenge for the actors. An actor might have to shoot their character's emotional death scene on Day 1 of production, before they have even established a relationship with their co-stars. Then, on Day 30, they might shoot the happy scene where their character first meets their love interest.</p>

            <h3>Weather and Sunlight Control Everything</h3>
            <p>Exterior shoots are at the mercy of the sun. If it rains for three days straight, a production can't just stop and wait. They will issue a "Cover Set" order—abandoning the planned outdoor scene and hastily jumping to an indoor scene from page 80 of the script just to keep the crew working.</p>
        """
    },
    {
        "filename": "first-assistant-director-stressful-job.html",
        "title": "First Assistant Director (1st AD): The Most Stressful Job in Hollywood",
        "desc": "They don't direct the actors, they direct the crew. Learn why the 1st AD holds the most stressful, exhausting, and critical job on any film set.",
        "content": """
            <h2>The General of the Cinematic Army</h2>
            <p>When you hear the title "Assistant Director," you might picture someone fetching coffee for the Director. You couldn't be more wrong. The First Assistant Director (1st AD) is the operational boss of the film set. While the Director looks at the monitor to check the acting, the 1st AD is looking at the clock, the sky, and 150 crew members.</p>

            <h3>The Master Schedule</h3>
            <p>The 1st AD's primary job is breaking down the script and creating the shooting schedule. They must calculate exactly how long it takes to shoot a car crash, how many hours a child actor is legally allowed to work, and when the sun will set on a specific Tuesday in November.</p>

            <h3>Running the Floor</h3>
            <p>On set, the 1st AD is the loudest voice in the room. They are the ones who yell "Quiet on set!" and "Roll sound!" They drive the pace of the day. If the camera department is taking too long to set up a light, the 1st AD is the one who has to forcefully tell them to hurry up, absorbing the anger of the crew so the Director doesn't have to.</p>

            <h3>Safety First</h3>
            <p>Above all else, the 1st AD is the chief safety officer. If a stunt involves fire, weapons, or moving vehicles, the 1st AD runs the safety meeting. If an actor gets hurt or a stunt goes wrong, the responsibility ultimately falls heavily on the 1st AD's shoulders for failing to secure the environment.</p>

            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; margin-top:30px;">
                <h3 style="margin-top:0; color:var(--accent);">Frequently Asked Questions</h3>
                <strong>Q: Does a 1st AD eventually become a Director?</strong><br>
                A: Rarely. While it happens occasionally, the skillsets are completely different. A Director is an artist and storyteller. A 1st AD is an elite project manager and logistical wizard. Many 1st ADs eventually become Line Producers.
            </div>
        """
    },
    {
        "filename": "continuity-errors-why-masterpieces-have-mistakes.html",
        "title": "Continuity Errors: Why Even Masterpiece Movies Have Glaring Mistakes",
        "desc": "Why does a coffee cup suddenly change hands? Why does a cigarette magically grow longer? Explore the fascinating world of continuity errors.",
        "content": """
            <h2>The Nightmare of the Script Supervisor</h2>
            <p>You are watching an intense drama. The camera cuts back and forth between two actors. Suddenly, you notice the water glass on the table is full, then half-empty, then full again. How did a $100 million movie, with hundreds of crew members, miss such an obvious mistake? Welcome to the nightmare of continuity.</p>

            <h3>The Reality of Multiple Takes</h3>
            <p>A single 2-minute dialogue scene is not shot all at once. The crew will shoot a "Master" wide shot. Then they will move the cameras to shoot medium shots of Actor A. Then they turn the cameras around to shoot Actor B. This process takes all day. Every time they reset the camera, the actors have to perfectly replicate their physical actions from 5 hours ago.</p>

            <h3>The Editing Room Sacrifices</h3>
            <p>A movie's secret weapon is the Editor. In the editing room, the Editor might realize that the best, most emotional acting performance for Actor A happened in Take 4, but the best reaction from Actor B happened in Take 12. In Take 4, Actor A was holding a pen. In Take 12, they had put the pen down. The Editor will usually choose the better acting performance, knowing it creates a continuity error, because emotion always trumps logic in cinema.</p>

            <h3>The Script Supervisor's Burden</h3>
            <p>There is a dedicated person on set called the Script Supervisor. They sit next to the Director, frantically taking notes and taking photographs to ensure props, hair, and wardrobe match perfectly from shot to shot. But they are human, and when a director is rushing to finish a scene before the sun goes down, continuity is usually the first thing thrown out the window.</p>
        """
    },
    {
        "filename": "pre-production-secrets-before-camera-rolls.html",
        "title": "Pre-Production Secrets: The Work Done Before the Camera Even Rolls",
        "desc": "Shooting the movie is actually the easy part. Discover the grueling, invisible months of Pre-Production that determine a film's success.",
        "content": """
            <h2>The Invisible Phase of Filmmaking</h2>
            <p>When people think of making a movie, they imagine cameras, lights, and actors yelling lines. In reality, the success or failure of a film is entirely decided months before a single frame of video is recorded. This phase is called Pre-Production, and it is the most crucial part of the process.</p>

            <h3>Location Scouting</h3>
            <p>A script might simply say "INT. CREEPY MANSION - NIGHT". It is up to the Location Manager to drive around the country for weeks, touring hundreds of houses, negotiating with homeowners, checking local zoning laws, and ensuring there is enough parking for 20 large production trucks.</p>

            <h3>Storyboarding and Shot Listing</h3>
            <p>A good Director doesn't just show up and figure out where to put the camera. During pre-production, the Director and the Director of Photography (DP) sit down and create a "Shot List"—a spreadsheet detailing every single camera angle they need for the entire movie. For complex action scenes, they hire artists to draw "Storyboards," which look like comic books, so the stunt team knows exactly what needs to happen.</p>

            <h3>Casting the Background</h3>
            <p>While the Lead Actors get the glory, casting the background extras is a massive pre-production undertaking. A crowd scene in a 1920s period piece requires the Wardrobe Department to source, fit, and tailor authentic clothing for 200 regular people, all of whom have to be booked, scheduled, and fed.</p>

            <h3>Tech Scouting</h3>
            <p>A few weeks before filming begins, the heads of all departments (Director, DP, Gaffer, Key Grip, Production Designer) get into a van and visit every single location. They stand in empty rooms and argue about where to hide the lights, where the generator will go, and whether they need to reinforce the floor to handle a heavy camera crane. If Pre-Production is done perfectly, the actual filming is just executing the plan.</p>
        """
    },
    {
        "filename": "unsung-heroes-grips-gaffers-best-boys.html",
        "title": "The Unsung Heroes of the Film Set: Grips, Gaffers, and Best Boys Explained",
        "desc": "Ever stayed through the movie credits and wondered what a 'Gaffer' or a 'Key Grip' actually does? Meet the blue-collar backbone of Hollywood.",
        "content": """
            <h2>Decoding the Movie Credits</h2>
            <p>If you have ever sat through the end credits of a Marvel movie, you have seen hundreds of bizarre job titles scroll past. "Key Grip." "Gaffer." "Best Boy." "Dolly Grip." These aren't made-up words; they belong to the highly skilled, blue-collar technicians who physically build the movie.</p>

            <h3>The Gaffer (Chief Lighting Technician)</h3>
            <p>The Gaffer is the head of the Electrical department. The Director of Photography (DP) decides the creative look of the lighting—"I want this scene to look like a moody, rainy afternoon." The Gaffer is the technical wizard who figures out exactly which $10,000 lamps, cables, and gels are required to actually create that look, and ensures the massive power generators don't blow up.</p>

            <h3>The Key Grip</h3>
            <p>If the Gaffer is in charge of creating the light, the Key Grip is in charge of creating the shadows. The Grip department builds the rigs, flags, and massive silk tents that shape, block, and diffuse the light. Grips also build all the heavy camera mounts. If a camera needs to be strapped to the hood of a speeding car, the Grips build the steel rig that ensures it doesn't fly off.</p>

            <h3>The Best Boy (Electric & Grip)</h3>
            <p>The term "Best Boy" dates back to early sailing and theater days. On a film set, there is a Best Boy Electric and a Best Boy Grip. They are the foremen of their respective departments. While the Gaffer and Key Grip stay on set next to the camera, the Best Boys are managing the trucks, hiring the daily crew, ordering equipment, and doing the heavy logistical lifting.</p>

            <h3>The Dolly Grip</h3>
            <p>When you see a smooth camera movement tracking alongside an actor walking down a hallway, the camera is likely mounted on a heavy cart with wheels, called a Dolly. The Dolly Grip is a highly specialized technician whose only job is to physically push and pull the dolly, hitting precise tape marks on the floor to keep the actor perfectly in focus. It is an art form that requires perfect timing.</p>
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
            <span><i class="far fa-folder"></i> Filmmaking & BTS</span>
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
    print("Injected 10 articles into index.html")
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
    print("Injected 10 articles into sitemap.xml")
else:
    print("WARNING: Could not find closing urlset in sitemap.xml")

print("Done generating 10 filmmaking articles!")
