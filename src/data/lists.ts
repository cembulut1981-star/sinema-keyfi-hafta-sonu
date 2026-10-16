// Auto-curated list content. Sources: WhatCulture film section.
import img1 from "@/assets/wc-list-1.jpg";
import img2 from "@/assets/wc-list-2.jpg";
import img3 from "@/assets/wc-list-3.jpg";
import img4 from "@/assets/wc-list-4.jpg";
import img5 from "@/assets/wc-list-5.jpg";
import ewMovies from "@/assets/ew-best-movies-2026.webp.asset.json";
import ewThrillers from "@/assets/ew-crime-thrillers.jpg.asset.json";
import ewTv from "@/assets/maxresdefault.jpg.asset.json";
import ewRock from "@/assets/ew-rock-songs.webp.asset.json";
import ewYoung from "@/assets/ew-young-stars.jpg.asset.json";
import mythologicalAsset from "@/assets/mythological.jpg.asset.json";
import bonnieTylerAsset from "@/assets/bonnie-tyler.jpg.asset.json";
import bobCover from "@/assets/ew-band-of-brothers-cover.jpg";
import bobG1 from "@/assets/ew-band-of-brothers-g1.jpg";
import bobG2 from "@/assets/ew-band-of-brothers-g2.jpg";
import bobG3 from "@/assets/ew-band-of-brothers-g3.jpg";
import bobG4 from "@/assets/ew-band-of-brothers-g4.jpg";
import bobG5 from "@/assets/ew-band-of-brothers-g5.jpg";
import bobG6 from "@/assets/ew-band-of-brothers-g6.jpg";
import bobG7 from "@/assets/ew-band-of-brothers-g7.jpg";
import ridleyScottCover from "@/assets/ridley-scott-ranked.jpg.asset.json";
import ridleyGladiator from "@/assets/ridley-gladiator-2.jpg.asset.json";
import ridleyBladeRunner from "@/assets/ridley-blade-runner.jpg.asset.json";
import ridleyAlien from "@/assets/ridley-alien.jpg.asset.json";
import nhjCover from "@/assets/na-hong-jin-hope-cover.jpg.asset.json";
import nhjChaser from "@/assets/na-hong-jin-chaser.jpg.asset.json";
import nhjYellowSea from "@/assets/na-hong-jin-yellow-sea.jpg.asset.json";
import nhjWailing from "@/assets/na-hong-jin-wailing.jpg.asset.json";

export type ListItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  source: string;
  countdownBadge?: string;
};

const _LISTS_RAW: ListItem[] = [
  {
    slug: "band-of-brothers-cast-then-and-now-25-years-later",
    title: "The Band of Brothers Cast, Then and Now: The Stars of HBO's Emmy-Winning Miniseries 25 Years Later",
    excerpt: "Twenty-five years after Easy Company jumped into Normandy, the ensemble that made HBO's 10-part epic has scattered across prestige TV, network hits and behind the camera. Here's where they landed.",
    countdownBadge: "25 years later",
    image: bobCover,
    source: "Entertainment Weekly",
    body: `When "Band of Brothers" premiered on HBO in 2001, it was the most expensive television production ever mounted: a 10-part epic produced by Tom Hanks and Steven Spielberg, following the real men of Easy Company, 506th Parachute Infantry Regiment, from training at Camp Toccoa through Normandy, Bastogne and the end of the war in Europe. It collected 20 Emmy nominations and won seven, including Outstanding Miniseries.

It also functioned as one of the great casting sessions in modern television — a roster of then-unknown and semi-known actors, many of them British playing Americans, who would go on to headline series of their own. Twenty-five years later, here's where the ensemble stands.

## Damian Lewis

![Then and now](${bobG1})

As Major Richard "Dick" Winters, Lewis carried the miniseries: the quiet, unshowy center that every other performance orbited. Almost nobody in America knew him at the time. In the years since he has become a fixture of prestige television, most famously as Nicholas Brody in "Homeland" — a role that won him an Emmy — and as hedge fund predator Bobby Axelrod in "Billions," alongside stage work and film roles that keep circling back to men whose composure is a form of armor.

## Ron Livingston

![Then and now](${bobG2})

Livingston played Captain Lewis Nixon, Winters' hard-drinking, sharp-eyed intelligence officer and closest friend. He arrived at "Band of Brothers" already recognizable from "Office Space" and "Sex and the City," and has spent the decades since as one of television's most reliable leads and character actors, including a long run as Joel Graham on "A Million Little Things."

## Scott Grimes

![Then and now](${bobG3})

As Technical Sergeant Donald Malarkey, Grimes gave the miniseries much of its warmth and much of its grief. A working actor since childhood, he went on to a long stretch on "ER" as Dr. Archie Morris, voice work as Steve Smith on "American Dad!," and a lead role as Gordon Malloy on "The Orville."

## Donnie Wahlberg

![Then and now](${bobG4})

Wahlberg's Carwood Lipton was the noncom who held the line at Bastogne, and the performance helped complete his transition from New Kids on the Block to serious screen actor. He has since anchored network television for more than a decade as Danny Reagan on "Blue Bloods," while producing and hosting on the side.

## Michael Cudlitz

![Then and now](${bobG5})

As Staff Sergeant Denver "Bull" Randleman, Cudlitz got one of the miniseries' most memorable solo sequences. He later became a familiar face across "Southland" and "The Walking Dead" as Abraham Ford, and has moved increasingly behind the camera as a director and producer on comic-book television.

## David Schwimmer

![Then and now](${bobG6})

Schwimmer's Captain Herbert Sobel is the antagonist of the early episodes — the martinet whose cruelty at Toccoa is the reason Easy Company becomes Easy Company. He was, by far, the most famous member of the cast at the time thanks to "Friends," and has since split his time between American and British television, including "The People v. O. J. Simpson," "Feel Good" and "Intelligence," plus a return to Central Perk for the 2021 reunion.

## The rest of Easy Company

![Then and now](${bobG7})

Part of the enduring pleasure of rewatching "Band of Brothers" is the parade of faces that would become stars later: future leading men and character actors who appear for an episode, a scene, or a single line before the war takes them out of the story. A quarter century on, the miniseries plays as both a monument to the men of the 506th and a snapshot of an entire generation of actors on the way up.`,
  },
  {
    slug: "hayden-panettiere-kacirilmamasi-gereken-6-rolu",
    title: "6 Must-See Roles of Hayden Panettiere",
    excerpt: "A career that began at five, approximately 60 jobs, and a sudden farewell at 36. From \"Remember the Titans\" to \"Nashville,\" six performances that tell the story of Hayden Panettiere's mark on screen.",
    countdownBadge: "6 role selection",
    body: `Her career, which began at the age of five with the daytime soap opera _One Life to Live_, proved that Hayden Panettiere was born for the screen. She transformed from a precocious child star into a magnetic actress on both the big and small screen: from Disney productions to brave young queen roles, and from there to dramatic performances. She appeared in animated hits like _A Bug's Life_ and sitcom giants like _Ally McBeal_.

Panettiere worked for so long and so much that when she passed away on Sunday at the age of 36, she left behind a striking resume of approximately 60 credits. Here are six must-see performances.

## 'Remember the Titans' (2000)

![Hayden Panettiere in Remember the Titans](/__l5e/assets-v1/812ce90e-278d-40c2-b832-579dd9964b2e/afb6a6af3283.webp)

Disney's _Remember the Titans_ brought together future stars, including Ryan Gosling and Donald Faison. Panettiere was just 10 years old when she landed the role of the football-obsessed tomboy Sheryl Yoast: the daughter of T.C. Williams High School's assistant coach Bill Yoast (Will Patton). Based on the true story of a desegregated high school football team in 1971 Virginia, the film pitted Patton against Denzel Washington as two coaches navigating racial tensions in the South; Sheryl was angry on her father's behalf when he was demoted and replaced by Washington.

With her thick Southern accent, messy blonde braids, and baseball T-shirts, many of the film's comedic moments belonged to Panettiere. In her memoir _This Is Me: A Reckoning_, she recounted almost missing the role because she was considered the "pretty JonBenét Ramsey type," which made her more ambitious in auditions. She described the same job as the "biggest role" of her life: "I had never felt so happy as an actor."

## 'Ice Princess' (2005)

![Hayden Panettiere in Ice Princess](/__l5e/assets-v1/d4827fa2-c607-4b4f-8534-ac1f6cf232ff/7737c3e672d0.webp)

By 2005, the world knew Panettiere was a Disney darling after _Remember the Titans_ and _Tiger Cruise_. But the ice skating story _Ice Princess_, her last Disney Channel movie, showed that the young actress was ready for bigger things. In the film, she plays Gennifer "Gen" Harwood, the reluctant rival of Michelle Trachtenberg's Casey Carlyle; all while contending with her strict mother and even stricter coach Tina (Kim Cattrall).

For the role, which she entered with almost no experience, she said in 2024, "When they gave us six weeks of training, I was like Bambi on ice the first day." "By the end, I was really good."

## 'Bring It On: All or Nothing' (2006)

![Hayden Panettiere in Bring It On: All or Nothing](/__l5e/assets-v1/44cce2c2-c08f-4fe1-a147-c6e617796e50/b989506c92f5.webp)

Not every teen comedy sequel can be _American Pie 2_. While _Bring It On: All or Nothing_ bears all the hallmarks of a direct-to-DVD production, it's the only _Bring It On_ spin-off considered a true sequel to the original. Panettiere is smart and electric as Britney Allen, a Pacific Vista cheerleader forced to leave her rich friends and neighborhood to move to the poorer side of Crenshaw Heights.

As in the first film, the tension here is between the snooty rich kids and the acrobatic, gritty underdogs. But Panettiere transforms her "Hip-Hop Barbie" character into a core of self-confidence and emotional vulnerability; stealing the show in a film that also features Solange and Rihanna.

## 'Heroes' (2006-2010)

![Hayden Panettiere as Claire Bennet in Heroes](/__l5e/assets-v1/d7caf0a8-5601-44f8-a643-8bd599ed03ab/153901eaf9e2.webp)

The first 15 minutes of _Heroes_ tell the viewer what they're in for: a man about to jump from a building, a professor pursuing his father's mysterious research, a camera girl fleeing the mafia with her son, and an office worker obsessed with kaiju who believes he can turn back time. But who can forget Panettiere's Claire Bennet diving into a wall of flames to save a stranger?

As the NBC series watched strangers around the world confront their powers, Panettiere remained at the heart of the story; her measured and determined performance grounded the viewer in that confusing world full of magical powers and malevolent government agencies. "Save the cheerleader, save the world" is not just a powerful slogan; it's a legacy.

## 'Scream 4' (2011)

![Hayden Panettiere as Kirby Reed in Scream 4](/__l5e/assets-v1/81b80705-9957-4467-8ce6-ceecc9ab4be9/d9720ffee461.webp)

Sometimes people really love know-it-alls. In _Scream 4_, Panettiere's Kirby Reed is a trivia maniac and a cynical encyclopedia of horror cinema. Wes Craven's attempts to give his last _Scream_ film before his death a millennial coat of paint sometimes grate; but Panettiere's charm makes it impossible to take your eyes off Kirby.

She instantly turned throwaway lines into classics and approached Kirby with such dedication that she became a "final girl" that fans insisted on seeing again. (She reprised the role in _Scream VI_ in 2023.) That unforgettable line she spat after Ghostface challenged her to a trivia duel: "I got it right. Damn it, I was right!"

## 'Nashville' (2012-2018)

![Hayden Panettiere as Juliette Barnes in Nashville](/__l5e/assets-v1/d418b116-f182-4a4c-a2da-0bf1da9d8c9d/005c22ecd052.webp)

The ABC series _Nashville_ could not have existed without Hayden Panettiere. Aside from her ability to oscillate between comedic intrigue and heartbreaking drama, the show's story was directly drawn from Panettiere's own life and struggles. In her memoir, she described the series as a "traumatic" experience that constantly dug into her life story: "It was so obvious… They weren't doing their homework. They weren't creating new storylines. They were just looking at my life and saying, 'Let's take what she's going through right now and put our own spin on it.'"

Still, Panettiere elevated the material. As country star Juliette Barnes, she transformed a typical prime-time soap opera role into a masterclass in dramatic acting; showing the simmering pain behind Juliette's eyes. It was gracefully done and, let's be honest: it was more than the show deserved from its star.`,
    image: "/__l5e/assets-v1/c17433ad-8d07-4bd0-b8b1-f1d0c5191a13/5642bf3b0576.webp",
    source: "Rolling Stone",
  },
  {
    slug: "orijinalinden-iyi-12-spin-off-dizi",
    title: "12 Spin-Off Series Better Than the Original",
    excerpt: "From \"Frasier\" to \"Star Trek: The Next Generation,\" 12 spin-offs that overshadowed the series they originated from. SlashFilm's list brings together shows that surpassed their main counterparts in quality or popularity.",
    countdownBadge: "12 series selection",
    body: `Making a spin-off on television is a delicate art. Whether planned or accidental, writers need to create a character that captures the audience's heart, and the actor needs to find the charisma to carry that role. After it airs, the real test begins: for the show to be at least as good as the production it originated from. Most spin-offs stumble right here. But a handful of shows not only reached the level of the main production but went a step further.

This list does not include shows like "Better Call Saul," "Batman Beyond," or "House of the Dragon," which could be considered "at least as good as their predecessor"; here, there are truly those that surpassed their predecessor.

## Frasier

![Frasier](/__l5e/assets-v1/2691e87a-8668-4388-a7b0-154b2a8a1ff0/48d0ef13d165.jpg)

One of the most successful spin-offs of all time: "Frasier" surpassed the quality of its parent series "Cheers." Dr. Frasier Crane was initially intended for only a few episodes, but Kelsey Grammer's performance propelled him to the center of the show, followed by his own series set in Seattle. Thanks to Frasier and his brother Niles's psychiatrist identities, the writers could play with intellectual humor; the other characters provided a comedic contrast to this subtle wit.

## Happy Days

![Happy Days](/__l5e/assets-v1/14726fa7-5b9c-466e-b9f8-8cbdc355319f/8f85a586c907.jpg)

An unusual spin-off by today's standards: the show began as an unsold pilot in ABC's "Love, American Style" anthology. George Lucas liked Ron Howard in the pilot and cast him in "American Graffiti"; the film's success rekindled interest in the pilot. Over time, Fonzie became the show's signature character. "Happy Days" also coined the phrase "jumping the shark" and spawned its own spin-offs like "Laverne & Shirley" and "Mork & Mindy."

## Xena: Warrior Princess

![Xena: Warrior Princess](/__l5e/assets-v1/ac71609c-0a5c-4103-bb7f-ccd6d43cfc9f/44e9ba58ec9b.jpg)

Xena, who appeared for a three-episode arc in "Hercules: The Legendary Journeys," left such an impression on viewers that she earned her own series. With its action, emotion, and complex relationships, the show brought together both male and female audiences, and thanks to the bond between Xena and Gabrielle, it also became a cult favorite for queer viewers; Lucy Lawless openly embraced this interpretation over the years.

## A Different World

![A Different World](/__l5e/assets-v1/8b766f77-37c1-40c4-bb13-cf49294450ed/842f882aacc6.jpg)

Created to move Denise Huxtable from "The Cosby Show" to college, the series found its identity under Debbie Allen's direction after Lisa Bonet's departure. With discussions ranging from gender roles to racism, class issues to Black identity, it established the template for college comedies and surpassed its parent series in depth of content.

## Family Matters

![Family Matters](/__l5e/assets-v1/c46919b2-029a-4c3d-8666-d1a8295b7bb5/f6a7dc81c954.jpg)

Harriette Winslow was initially an elevator operator in "Perfect Strangers"; her comedic chemistry with her husband Carl earned them their own show. Spanning the entire 90s, the series almost single-handedly defined the concept of a "nerd" with Steve Urkel's "Did I do that?" catchphrase — and maintained a positive portrayal of a Black middle-class family on screen for years.

## Law & Order: SVU

![Law & Order: SVU](/__l5e/assets-v1/9f988baf-a7aa-43b5-b00b-2c329afe542e/8ecb10e0ea08.jpg)

The strongest link in the "Law & Order" universe. The series, which began in 1999, has served as a school for almost every Hollywood actor for a quarter-century. In addition to perfecting the crime procedural, Mariska Hargitay's Olivia Benson, who embodies both toughness and compassion, saves the show from being a cold case narrative.

## NCIS

![NCIS](/__l5e/assets-v1/37534866-8183-4254-a2ef-d4ce7484df09/c907436940f8.jpg)

Leroy Gibbs and his team, who appeared in the eighth season of the now-forgotten CBS series "JAG," formed the pilot for "NCIS" with a two-episode arc. The crime procedural, which combines military themes, has been running for over 20 years; even though Mark Harmon has retired from the flagship series, he continues to be part of the universe as the narrator of "NCIS: Origins."

## Good Times

![Good Times](/__l5e/assets-v1/f5efc164-7797-4843-9a6a-02cfdbb73197/c0e4cd144741.jpg)

Florida Evans first appeared in Norman Lear's "Maude"; for "Good Times," the character's backstory was rewritten, and the family moved to public housing in Chicago. Addressing issues like gang violence, theft, child abuse, and eviction, the series also made history by presenting the first Black father to be found at home on screen.

## The Flash

![The Flash](/__l5e/assets-v1/2d0f4cb2-5a8c-4985-ae60-4ea7426df62e/8cbf4efa0a08.jpg)

During The CW's golden age, it became the crown jewel of the Arrowverse, even overshadowing "Arrow," which lent its name to the universe. Its tone, balancing seriousness with lightness, the warmth of its cast, and the chemistry between Grant Gustin and Candice Patton, elevated the series beyond superhero action.

## The Jeffersons

![The Jeffersons](/__l5e/assets-v1/22519ce9-15eb-48b7-bf9d-4c6376ef9ec9/79b46e85c251.jpg)

Another Norman Lear production. The only character you likely remember from "All in the Family" is Archie Bunker; in "The Jeffersons," it's the comedic chemistry of George and Weezie and Florence's sharp tongue that stick in your mind. It tackled topics like racism, gun violence, and substance abuse with the same courage but with a stronger cast.

## Daria

![Daria](/__l5e/assets-v1/21062e1d-e648-4024-8356-c107b4db3bc8/791cc2580aeb.jpg)

Daria Morgendorffer, a side character from "Beavis and Butt-Head," transformed into MTV animation's smartest social commentary in her own series. What she said about adolescence, class, and popularity is still relevant decades later; the show's strength lies in giving even "stupid" characters a layered past.

## Star Trek: The Next Generation

![Star Trek: The Next Generation](/__l5e/assets-v1/11ce8507-8c98-4d36-b82a-5a1b2d3dc81d/b48daf2fae24.jpg)

It's not only one of the best shows of the 90s but also considered one of the best spin-offs of all time. Its stories are more complex, the acting less theatrical; when watched today, it's more digestible than the original series. Picard and his crew elevated science fiction to a respected place in popular culture and laid a solid foundation for subsequent series like "Deep Space Nine."

In short: a spin-off doesn't always have to be a pale copy. Sometimes, it can even be the only reason we remember the original series.`,
    image: "/__l5e/assets-v1/8f5bc766-009c-4ed5-8933-dc72fb71b77a/a644ab98d1d9.jpg",
    source: "SlashFilm",
  },

  {
    slug: "christopher-nolan-en-iyi-oyunculuk-performanslari",
    title: "13 Best Acting Performances from Christopher Nolan Films: From Matt Damon to Heath Ledger",
    excerpt: "Variety's awards editor Clayton Davis ranked the 13 most memorable acting performances in Nolan's career — a list ranging from Heath Ledger's Joker to Matt Damon's Odysseus.",
    body: "Time has been kind to Christopher Nolan. The director's filmography has become a benchmark, not only for its visual design and temporal experiments but also for the acting performances it has produced. Variety's awards editor Clayton Davis ranked the 13 best acting performances in Nolan's career.\n\n**1. Heath Ledger — Joker (The Dark Knight, 2008):** Undisputedly at the top of the list. Ledger's chaotic, unpredictable Joker proved that a superhero film could win an Oscar for an actor.\n\n**2. Cillian Murphy — J. Robert Oppenheimer (Oppenheimer, 2023):** The pinnacle of the Nolan-Murphy collaboration; it brought Murphy his first Oscar. A rare performance that built a historical figure from the inside out.\n\n**3. Matt Damon — Dr. Mann / Odysseus (Interstellar, 2014 & The Odyssey, 2026):** Davis evaluates Damon's performances in two different Nolan projects together. In 'The Odyssey,' Damon delivers one of the most layered works of his career.\n\n**4. Marion Cotillard — Mal (Inception, 2010):** A performance that reminds us that the ghost in Cobb's mind is not just a threat, but a figure of grief.\n\n**5. Matthew McConaughey — Cooper (Interstellar):** The most emotional work of the 'McConaissance' era; the tears in the bookshelf scene are still debated.\n\nThe list also continues with Christian Bale (Batman trilogy and The Prestige), Guy Pearce (Memento), Robert Pattinson (Tenet), Anne Hathaway (Interstellar & The Dark Knight Rises), Tom Hardy (Dunkirk, The Dark Knight Rises), Florence Pugh (Oppenheimer), Ken Watanabe (Batman Begins, Inception), and Michael Caine (career-long Nolan collaboration).\n\nDavis's conclusion is clear: although Nolan may not be known as an 'actor's director,' his filmography constitutes one of the richest archives of performances of the last two decades.",
    image: "/__l5e/assets-v1/dddaf637-3b47-4ce6-a8ce-e2993a1c4f3f/041f9cdc3736.webp",
    source: "Variety",
  },
  {
    slug: "guardian-okurlarinin-2026-favori-filmleri",
    title: "\"I Watched It Seven Times in the Cinema\": Guardian Readers' Favorite Films of 2026",
    excerpt: "After Guardian editors picked their best of 2026, readers also had their say. From 'Backrooms' to 'The Secret Agent,' magical cinematic moments that marked the first half of the year.",
    body: "After Guardian editors selected the best films of the first half of 2026, they asked readers to share their magical cinematic moments from the first six months of the year. The recurring themes and surprising choices in the messages received paint a striking collective portrait.\n\n**The Secret Agent** — Kleber Mendonça Filho's film captivated Liz, writing from London, from the very first frame with its strange opening scene set at a gas station in rural Brazil. Ghirotti, a corrupt corporate executive trying to corner the fugitive academic Armando, is a villain who sends shivers down the audience's spine.\n\n**Backrooms** — This low-budget experiment, shot with endless yellow corridors and fluorescent lighting, is one of the most talked-about indies of the first half of the year. In one reader's words, \"I watched it seven times in the cinema\" — one of the rare works that successfully transitioned from a YouTube short film to a feature.\n\n**The Ballad of Wallis Island** — A small-scale, warm, and music-filled island story; for many readers, the 'little miracle' film of the year. Some said they wanted to hug a stranger after leaving the cinema.\n\n**Sinners** — Ryan Coogler's vampire-music hybrid film transformed into a living experience in IMAX theaters. Readers particularly cite the blues sequence as the year's boldest set-piece.\n\n**Bring Her Back** — Danny and Michael Philippou brothers' second film after 'Talk to Me' not only met but exceeded expectations for horror fans. \"I don't remember the last time I saw a cinema so silent,\" wrote a reader from Manchester.\n\nThe list goes on with titles such as 'Sentimental Value,' which resonated at Cannes with its 'Anora' courage, Werner Herzog's new documentary, Payal Kapadia's new work, and readers' surprise favorite 'Friendship.' Returning to the cinema seems to be evolving from a celebrated discourse into a concrete habit each year — at least for Guardian readers, the first half of 2026 is proof of this.",
    image: "/__l5e/assets-v1/1b267def-cd4a-4daa-9213-d87b0baeb668/1f975db04bfc.avif",
    source: "The Guardian",
  },

  {
    slug: "az-bilinen-korku-filmleri",
    title: "10 Great Horror Movies Nobody's Talking About",
    excerpt: "Ten horror films that remain in the shadow of box office hits and classics, but are among the genre's boldest, most atmospheric, and most unforgettable examples.",
    body: `When horror cinema is mentioned, the same names always come to mind: *The Exorcist*, *Halloween*, *Hereditary*. Yet, the genre's vast archive is full of productions that have remained in the shadow of box office hits but are just as bold, cinematographic, and disturbing. In this list, we have brought together ten films that even digital platform algorithms rarely recommend, but which will linger in your mind for days after you watch them.

## 1. The Hunger (1983)

This vampire film, marking the beginning of Tony Scott's directorial career, transforms horror into a fashion shoot aesthetic with iconic performances from David Bowie and Catherine Deneuve.

## 2. Session 9 (2001)

Shot in an abandoned asylum, this film makes atmosphere its main character. Sound design and use of space are among the best examples of the "slow burn horror" genre.

## 3. Afflicted (2013)

One of the most creative examples of the found-footage genre. An independent Canadian production that treats vampirism as a metaphor for illness.

## 4. Lake Mungo (2008)

This Australian mockumentary frames themes of grief and loss within a supernatural setting. Its ending stays with you for days after watching.

## 5. The Endless (2017)

Justin Benson and Aaron Moorhead's cosmic horror masterpiece. Despite its small budget, it manages to produce big ideas.

## 6. Kill List (2011)

This British production, bearing Ben Wheatley's signature, starts as a family drama and transforms into a folk-horror nightmare.

## 7. Noroi: The Curse (2005)

The pinnacle of Japanese found-footage tradition. Also a cult classic with its complex mythology and unsettling pace.

## 8. Pontypool (2008)

A minimalist horror set in a small radio station, where language itself becomes a virus.

## 9. The Beyond (1981)

Lucio Fulci's gothic-surreal masterpiece. A collection of nightmares that relies more on mood than logic.

## 10. Possum (2018)

This production, directed by Matthew Holness, tells of childhood trauma through a terrifying puppet. Both an art film and horror.`,
    image: img1,
    source: "WhatCulture",
  },
  {
    slug: "degeri-bilinmemis-korku-filmleri",
    title: "10 Most Underrated Horror Movies of All Time",
    excerpt: "Ten horror classics that didn't get the attention they deserved when they were released, but have risen to cult status over the years or are still waiting to be rediscovered.",
    body: `The horror genre is full of "underrated" stories. Sometimes a film is ahead of its time, sometimes it's released at the wrong time, and sometimes it's left to die by major studios in terms of marketing. The following ten productions are cult classics that didn't get the recognition they deserved from critics or at the box office, but should be re-evaluated over time.

## 1. The Exorcist III (1990)

This sequel, personally directed by William Peter Blatty, has as much theological depth as the original. The famous corridor scene is considered the best jump-scare in the history of the genre.

## 2. Event Horizon (1997)

"A production that tackles the theme of "Hell in Space" in the boldest way. It was misunderstood upon release, but became a cult classic in the DVD era."

## 3. In the Mouth of Madness (1994)

John Carpenter's Lovecraftian masterpiece. Despite being one of the late-career treasures, it's still not talked about enough.

## 4. Trick 'r Treat (2007)

Halloween-themed anthology film. It was shelved by the studio for three years but is now rediscovered every October.

## 5. The Descent (2005)

Neil Marshall's claustrophobic cave nightmare. Despite being one of the defining productions of the genre for the 2000s, it is still underestimated in mainstream discussions.

## 6. Frailty (2001)

Bill Paxton's directorial masterpiece. It presents themes of religion, family, and serial killing in a shocking balance.

## 7. Cure (1997)

Kiyoshi Kurosawa's psychological thriller masterpiece. A work positioned at the heart of Eastern cinema rather than for Western audiences.

## 8. Prince of Darkness (1987)

The middle link in Carpenter's "Apocalypse Trilogy." A bold text combining quantum physics and ancient demon mythology.

## 9. The Reflecting Skin (1990)

Philip Ridley's gothic and poetic horror experiment. Unique with its dreamlike imagery and disturbing theme.

## 10. Angel Heart (1987)

Alan Parker's production that brings together neo-noir and occult horror. With unforgettable performances by Robert De Niro and Mickey Rourke.`,
    image: img2,
    source: "WhatCulture",
  },
  {
    slug: "kotu-olacagi-belli-son-donem-filmleri",
    title: "10 New Movies Everyone Knows Will Be Bad",
    excerpt: "One of the most controversial productions of recent times, which gave disaster signals from the moment its trailer was released, and was slammed by moviegoers and critics even before its release.",
    body: `Some films are branded "this won't work" by everyone the moment their first trailers drop. Unfortunately, sometimes predictions come true, and sometimes studios ignore these early signals. Here are ten productions from the 2025-2026 period that have been most debated, many of which had their fates rewritten from the start.

## 1. Scream 7

The film, shot after the departure of the series' main actors, has already disappointed fans with script leaks.

## 2. Madame Web

Another dead end for Sony's Spider-Man universe. Even Dakota Johnson distanced herself from the film in interviews.

## 3. Argylle

Matthew Vaughn's "big twist" promise turned into empty smoke. Even its trailer spread confusion.

## 4. Borderlands

Eli Roth's video game adaptation simultaneously broke game fans and moviegoers.

## 5. The Marvels

The most concrete example of MCU fatigue. Even before its release, the marketing team's silence was a bad sign.

## 6. Rebel Moon: Part Two

Zack Snyder's sci-fi sequel for Netflix received even weaker reviews than the first film.

## 7. Kraven the Hunter

Sony's villain movie series continues. Even an R rating wasn't enough to save the film.

## 8. Trap

M. Night Shyamalan's latest outing. The concept was ambitious, but the execution condemned the audience to a tiresome delay.

## 9. Bad Boys: Ride or Die

The series' nostalgic energy seems to have run out. The trailer's bad CGI was a warning.

## 10. Snow White (Live Action)

Disney's effort to remake its classic animations as live-action films perhaps hit rock bottom with this production.`,
    image: img3,
    source: "WhatCulture",
  },
  {
    slug: "2020lerin-en-uc-korku-filmleri",
    title: "10 Most Unusual Horror Films of the 2020s",
    excerpt: "The boldest, most controversial, and most unusual horror productions of the 2020s so far. Ten films that push the boundaries of the genre and are not afraid to disturb the audience.",
    body: `The first half of the 2020s has been an unexpected renaissance for horror cinema. The popularization of independent productions with studios like Blumhouse and A24 has allowed genre cinema to pursue the "unusual." Here are the ten most extreme, most memorable horror productions of this decade so far.,

## 1. Titane (2021)

Julia Ducournau's Cannes Palme d'Or-winning production. A shocking film that redefines body horror, gender identity, and family.

## 2. Lamb (2021)

This Icelandic folk-horror is unforgettable with its slow-burn atmosphere and shocking finale.

## 3. Longlegs (2024)

Box office surprise full of Nicolas Cage's terrifying performance, blending 90s detective aesthetic with occult horror.

## 4. Terrifier 3 (2024)

Art the Clown's Christmas-themed massacre. A powerful manifesto for practical effects cinema.

## 5. The Substance (2024)

Coralie Fargeat's body horror masterpiece. It turns Hollywood's fear of aging into a grotesque allegory.

## 6. Skinamarink (2022)

Despite its small budget, a minimalist experience about childhood nightmares that sparked debate with its stylistic experimentation.

## 7. Men (2022)

Alex Garland's feminist folk-horror interpretation. Its ending is one of the genre's most debated sequences.

## 8. Infinity Pool (2023)

Brandon Cronenberg's psychedelic and boundary-pushing vacation nightmare, following in his father's footsteps.

## 9. In My Mother's Skin (2023)

This Filipino-made fairytale horror is an original fairytale set against the backdrop of World War II.

## 10. Immaculate (2024)

A production starring Sydney Sweeney, which tackles the theme of religious horror with a modern perspective.`,
    image: img4,
    source: "WhatCulture",
  },
  {
    slug: "2026-en-cok-beklenen-filmler",
    title: "10 Most Anticipated Movies for the Rest of 2026",
    excerpt: "The most exciting productions coming to cinemas in the second half of the year. From big studio sequels to auteur works, ten films poised to make their mark on the rest of 2026.",
    body: `2026 is shaping up to be one of the busiest periods for the cinema calendar in recent years. The calendar is packed with long-delayed major studio productions finally hitting theaters, new works from great auteurs, and surprises from festival seasons. Here are the ten most talked-about films for the rest of the year.,

## 1. Avatar: Fire and Ash

James Cameron's third installment in the series. The production, which will introduce Pandora's "ash clan," is definitely the box office phenomenon of the year.

## 2. Dune: Part Three

Denis Villeneuve brings Frank Herbert's *Dune Messiah* to the big screen. Timothée Chalamet's Paul is now in a completely different place.

## 3. The Odyssey

Christopher Nolan's adaptation of Homer. Claims to be the first mythological epic shot with an IMAX camera.

## 4. Bugonia

Yorgos Lanthimos's third collaboration with Emma Stone. A reinterpretation of the South Korean film *Save the Green Planet*.

## 5. Zootopia 2

Sequel to Disney animation studio's most successful original series. A strong contender for the year-end family film throne.

## 6. Wicked: For Good

The second part of the musical. Cynthia Erivo and Ariana Grande's performances will be back on the agenda in Oscar discussions.

## 7. The Bride!

Maggie Gyllenhaal's reinterpretation of Bride of Frankenstein. Christian Bale and Jessie Buckley in the lead roles.

## 8. Frankenstein

Guillermo del Toro's long-awaited passion project. Coming to theaters and the platform via Netflix.

## 9. Michael

Antoine Fuqua's Michael Jackson biopic. The project, delayed due to legal hurdles, finally has a release date.

## 10. After the Hunt

Luca Guadagnino's academic thriller bringing together Julia Roberts and Ayo Edebiri. A strong contender in the Oscar season after Venice.`,
    image: img5,
    source: "WhatCulture",
  },
  {
    slug: "2026-nin-simdiye-kadar-en-iyi-tv-dizileri",
    title: "The Best TV Shows of 2026 So Far",
    excerpt: "The most powerful TV series that stood out in the first six months of 2026, blending genres and addressing anxieties with humor and original stories.",
    body: `This list was inspired by Rolling Stone's "The Best TV Shows of 2026 So Far" article. The standout series from the first half of 2026, while mostly dealing with anxiety, identity, and the tensions of the business world, also offer surprising humor and original narratives.

## 1. ‘A Knight of the Seven Kingdoms’ (HBO)

This spin-off, set in the *Game of Thrones* universe, focuses less on epic grandeur and more on the simultaneously humorous and heartfelt adventures of Dunk and Egg. The story feels like a breath of fresh air in HBO's fantasy world, freely roaming on the periphery of the official saga.

## 2. ‘Bait’ (Prime)

This Riz Ahmed-led production subtly explores an actor's struggle with identity, shame, and personal values as he vies for the role of James Bond. It adds a unique dark humor to British cinema.

## 3. ‘Beef’ Sezon 2 (Netflix)

This continuation, maintaining the dark and sharp humor of the first season, reflects the echoes of unexpected conflicts and modern rage in society even more powerfully. The characters' internal breakdowns offer viewers a high-tension experience.

## 4. ‘Big Mistakes’ (Netflix)

This work, progressing through power, media, and criminal justice, tells how mistakes can turn into a large spiral. Its serious tone is far from being misunderstood, and it maintains a balanced humor and tension.

## 5. ‘The Comeback’ Sezon 3 (HBO)

Returning as a reference to the ruthlessness of the series world and the effort to be reborn, this season presents the character's fall in front of the camera and their subsequent rise in a tragicomic tone.

## 6. ‘The Fall and Rise of Reggie Dinkins’ (NBC)

The story of a character caught between public service, media, and a political career. Despite its NBC format, the production offers bold political satire and an exploration of identity.

## 7. ‘Hacks’ Sezon 5 (Max)

"Entering the cutthroat world of comedy writing, this season tackles generational clashes and the pressure of creativity with a satirical yet gentle tone. It remains a classic hit for Max."

## 8. ‘Industry’ Sezon 4 (HBO)

This season, showcasing the ruthless competition of the financial world, reveals how young professionals push moral boundaries and change in pursuit of success.

## 9. ‘Margo’s Got Money Troubles’ (Apple TV)

Apple TV's young adult comedy tells the story of debt and adult anxiety in a colorful and fluid language. Margo's financial problems are combined with unexpected humor and sincerity.

## 10. ‘The Pitt’ Sezon 2 (HBO Max)

This season, blending hospital drama with corporate conflict, tells the chaotic and human stories of the healthcare sector through strong characters.

## 11. ‘Widow’s Bay’ (Apple TV)

This mystery series, revolving around new widow characters settling in a sinister coastal town, offers a compelling thriller with an atmosphere that slowly builds tension.

## 12. ‘Wonder Man’ (Disney+)

This series, which offers a meta-perspective on the superhero format, cleverly explores identity crises within Hollywood and the production industry. It's both an entertaining and thought-provoking option for Disney+.
`,
    image: "/__l5e/assets-v1/5878242b-5eba-4476-abe1-d70f79b394c9/86f0ca23976b.webp",
    source: "Rolling Stone",
  },
  {
    slug: "2026-yilinin-en-iyi-10-filmi",
    title: "The 10 Best Films of 2026 (So Far)",
    excerpt: "From horror to animation, space adventure to documentary: Entertainment Weekly's selection of ten films highlighted in the first half of 2026.",
    body: `2026 has been a year full of surprises for cinema. *Sinners* snatched the Best Picture Oscar, *Obsession* became a phenomenon despite its low budget, *Toy Story 5* broke franchise records. We've translated Entertainment Weekly's editors' selection of ten films for the first half of the year.

## 1. 28 Years Later: The Bone Temple

Nia DaCosta continues Danny Boyle's visionary sequel with her own dark and gothic aesthetic. Ralph Fiennes' Dr. Kelson is one of the year's most unforgettable characters.

## 2. The Drama

Directed by Kristoffer Borgli, this A24 production, bringing together Zendaya and Robert Pattinson, remains unforgettable with its shocking twist and pre-wedding tempo.

## 3. EPiC: Elvis Presley in Concert

Baz Luhrmann reconstructs Elvis's Vegas residency with never-before-seen footage and audio recordings. A documentary from the King's own mouth.

## 4. The Invite

This chamber play by Olivia Wilde, starring Seth Rogen, Penélope Cruz, and Edward Norton; is a bold conversation about neighborhood, marriage, and desire.

## 5. Obsession

Curry Barker's YouTube-rooted direction reignited the appetite for low-budget horror films. Inde Navarrette's gaze is the year's most unsettling performance.

## 6. Omaha

Starring John Magaro, this is a road trip story of a father who lost his wife, with his two children. After *Past Lives*, Magaro delivers one of the most devastating performances of his career.

## 7. Project Hail Mary

Ryan Gosling takes on the journey of a teacher saving the galaxy's fate in this Andy Weir adaptation. A space adventure full of wonder and hope.

## 8. Send Help

One of the most intriguing independent horror releases of the summer. It brings a minimalist freshness to the genre.

## 9. Sinners

Ryan Coogler's vampire film is still being talked about after winning the Oscar. Michael B. Jordan's dual role is at the peak of performances.

## 10. Toy Story 5

Pixar's film made the biggest opening in franchise history. This installment, featuring Jessie prominently, tells the story of toys' struggle with the digital age.`,
    image: ewMovies.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-gerilimli-suc-thrillerlari",
    title: "The 30 Most Tense Crime Thrillers of All Time",
    excerpt: "From classic noirs to contemporary shocks: Thirty films signed by masters like Hitchcock, Fincher, and Bong Joon Ho, navigating the peak of suspense.",
    body: `A good crime thriller places us right in the middle of a dangerous, high-stakes situation; but it doesn't force us to face the consequences of breaking the law. Built with complex plots, moral dilemmas, and gray characters, these films offer a glimpse into the dark side of society. Here are prominent titles from 30 films compiled by Entertainment Weekly, navigating the heights of the genre.

## 1. Memories of Murder (2003)

This Korean classic by Bong Joon Ho, which tells the true story of a serial killer, frames inadequacy, anger, and despair within a detective story.

## 2. Chinatown (1974)

Roman Polanski's neo-noir masterpiece, with Jack Nicholson's iconic performance, exposes the corruption behind Los Angeles' water deals.

## 3. Seven (1995)

David Fincher's production that turns the seven deadly sins into the darkest detective nightmare of the year. The chemistry between Morgan Freeman and Brad Pitt is undeniable.

## 4. Zodiac (2007)

Another Fincher masterpiece, a patient, meticulous, and disturbing work that shows how obsession consumes a journalist and the police.

## 5. Elevator to the Gallows (1958)

Louis Malle's debut feature follows the unraveling of a murder plot, accompanied by Miles Davis's improvised saxophone.

## 6. The Silence of the Lambs (1991)

The meeting of Anthony Hopkins and Jodie Foster created the only horror-thriller blend to win the big five Oscars.

## 7. Rear Window (1954)

Hitchcock's textbook example of single-location suspense, about a photographer who believes he witnessed his neighbor's murder.

## 8. No Country for Old Men (2007)

The Coen Brothers' adaptation of Cormac McCarthy; Anton Chigurh's presence brought a new villain archetype to the genre.

## 9. Prisoners (2013)

Denis Villeneuve's long, wet, dark thriller starring Hugh Jackman and Jake Gyllenhaal. It makes us question where moral boundaries end.

## 10. The rest of the list

*The Departed*, *Nightcrawler*, *Gone Girl*, *Mystic River*, *L.A. Confidential*, *Heat*, *The French Connection*, *Blue Ruin*, *Drive*, *A Simple Plan*, *Fargo*, *Blood Simple*, *The Long Goodbye*, *Klute*, *Vertigo*, *Strangers on a Train*, *Insomnia*, *The Vanishing*, *Cure*, *Memento* ve *The Third Man*.`,
    image: ewThrillers.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "2026-en-iyi-tv-dizileri-ew",
    title: "The 10 Best TV Shows of 2026 (So Far)",
    excerpt: "From The Pitt to Widow's Bay, Hacks to Industry: Entertainment Weekly's top ten TV shows for the first half of 2026.",
    body: `The small screen was packed with both new productions and strong returning seasons in the first half of 2026. Sterling K. Brown's *Paradise*, Jean Smart's *Hacks*, Myha'la's *Industry*, and Sam Reid's *Interview with the Vampire* are among the season's most talked-about shows.

## 1. The Pitt (Max)

This series reinvents the hospital drama format with real-time, single-location suspense. Noah Wyle delivers the most mature performance of his career.

## 2. Paradise (Hulu)

Starring Sterling K. Brown, this political thriller delivered the year's most debated pilot episode with its first-episode twist.

## 3. Hacks (Max)

Deborah Vance and Ava's relationship reaches its darkest point this season. Jean Smart's Emmy win seems certain.

## 4. Industry (HBO)

The ruthless world of finance, with a new focus in its fourth season, further deepens the moral decay of its characters.

## 5. Interview with the Vampire (AMC)

Sam Reid's Lestat is hailed as the best screen adaptation of Anne Rice's work to date.

## 6. The Studio (Apple TV+)

Directed by and starring Seth Rogen, this Hollywood satire brutally proves the absurdity of the industry.

## 7. Severance (Apple TV+)

The second season was worth the long wait. Ben Stiller's aesthetic and Dan Erickson's script continue to reshape the genre.

## 8. The White Lotus (HBO)

Mike White's third season moved to Thailand. Its ensemble cast and social sharpness are once again spot on.

## 9. Widow's Bay (Apple TV+)

The biggest surprise of the year. This mystical thriller set in a coastal town connects with its characters as much as its atmosphere.

## 10. Andor (Disney+)

The second and final season goes down in history as the most adult production in the *Star Wars* universe to date.`,
    image: ewTv.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "tum-zamanlarin-en-iyi-25-rock-sarkisi",
    title: "The 25 Best Rock Songs of All Time",
    excerpt: "From Prince to Led Zeppelin, The Beatles to Nirvana: 25 rock classics that form the heart of the genre, never losing their rebellion and noise.",
    body: `Rock & roll is, at its core, a rebellion against the status quo — a state of defiance that isn't afraid to make noise and create chaos. That's why compiling a list of "the best rock songs of all time" is a somewhat contradictory task. But Entertainment Weekly took on this challenge and selected 25 songs that have left their mark on the genre's history.

## 1. "Let's Go Crazy" — Prince

The *Purple Rain* opener; a perfect fusion of funk, rock, and gospel. Prince's knee-slide entrance still gives you goosebumps.

## 2. "Smells Like Teen Spirit" — Nirvana

The manifesto of a generation in the 90s. Butch Vig's production and Kurt Cobain's vocal breaks still sound fresh.

## 3. "Stairway to Heaven" — Led Zeppelin

Perhaps rock's most controversial "best." It climbs from an acoustic beginning to an electric peak over eight minutes.

## 4. "Bohemian Rhapsody" — Queen

Its rule-defying structure, a mix of opera, rock, and ballad, redefined the boundaries of the genre.

## 5. "Like a Rolling Stone" — Bob Dylan

The song where he declared his transition from folk to rock. The Newport 1965 audience couldn't forget it.

## 6. "Born to Run" — Bruce Springsteen

The streets of New Jersey are woven into rock like poetry. The beginning of "The Boss" moniker.

## 7. "London Calling" — The Clash

Punk's most political moment. It has been re-listened to during every crisis since its release in 1979.

## 8. "Respect" — Aretha Franklin

Otis Redding's original transformed into a feminist anthem in Aretha's hands.

## 9. "Hey Jude" — The Beatles

Paul McCartney's song for Julian Lennon, with its seven-minute choral finale, started the stadium rock format.

## 10. "Purple Haze" — Jimi Hendrix

A manifesto demonstrating what the electric guitar could do.

The rest of the list: "Whole Lotta Love", "Satisfaction", "Sweet Child o' Mine", "November Rain", "Comfortably Numb", "Won't Get Fooled Again", "Baba O'Riley", "Layla", "Free Bird", "Thunderstruck", "Enter Sandman", "One", "Black", "Everlong", "Somebody to Love" and "Immigrant Song".`,
    image: ewRock.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "genc-yasta-hayatini-kaybeden-tv-yildizlari",
    title: "8 TV Stars Who Died Young",
    excerpt: "From Heather O'Rourke to Cameron Boyce, Jonathan Brandis to Brittany Murphy: eight actors who left their mark on the screen and left us too soon.",
    body: `Some stars shine early, and fade early. The film and music industries have many losses like James Dean, Jayne Mansfield, Jimi Hendrix, and Jim Morrison. Television has also witnessed similar tragedies: from 12-year-old Heather O'Rourke to *Descendants* star Cameron Boyce, the heroes of a generation's childhood disappeared too soon.

## 1. Heather O'Rourke (12)

The unforgettable "Carol Anne" from the *Poltergeist* trilogy, she passed away in 1988 due to an undiagnosed intestinal illness.

## 2. Cameron Boyce (20)

Disney Channel's shining star, in 2019, an epileptic seizure in his sleep devastated his family, fans, and the industry.

## 3. Jonathan Brandis (27)

The *SeaQuest DSV* star committed suicide in 2003 after his career stagnated. His death sparked discussions about psychological support for child stars.

## 4. Brittany Murphy (32)

Murphy, remembered for *Clueless* and *8 Mile*, passed away unexpectedly in 2009. Suspicions about her death lingered for years.

## 5. Anton Yelchin (27)

Chekov from the *Star Trek* reboot. His tragic accident in 2016, where he was crushed by his own Jeep, brought automotive recalls to the agenda.

## 6. Naya Rivera (33)

*Glee*'s Santana Lopez, drowned in a lake accident in 2020 after leaving her son on the boat.

## 7. Cory Monteith (31)

*Glee*'s Finn Hudson, passed away in 2013 at the end of his struggle with addiction.

## 8. Angus Cloud (25)

*Euphoria*'s Fezco. He died in 2023 from an accidental overdose shortly after his father's death.`,
    image: ewYoung.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "en-iyi-mitolojik-filmler",
    title: "From Greek Epics to Biblical Blockbusters: The 20 Best Mythological Films, Ranked",
    excerpt: "As Christopher Nolan's The Odyssey prepares to hit the box office, the Guardian has ranked cinema's most magnificent, bizarre, and memorable mythological films.",
    body: `As Christopher Nolan prepares to bring The Odyssey to the big screen in December, the Guardian has reopened the great files of mythological cinema. From Greek epics to biblical blockbusters, Korean folklore, and the giant superhero productions of the pre-Marvel era, these 20 films show how mythology has "come home" to cinema.

## 20. Percy Jackson & the Olympians: The Lightning Thief (2010)

Chris Columbus's adaptation of Rick Riordan, though disappointing to series fans, is an unforgettable child-mythology blend with Uma Thurman's Medusa and Steve Coogan's Hades.

## 19. Immortals (2011)

Tarsem Singh's Theseus film, a visual feast, is concerned not with historical accuracy but with pictorial effect. Henry Cavill's first major role.

## 18. Wonder Woman (2017)

Patty Jenkins's film skillfully places Amazon mythology into a World War I melodrama. Gal Gadot's Diana is one of the most mythological of superhero films.

## 17. Troy (2004)

Wolfgang Petersen's Homeric adaptation removes the gods and replaces them with Brad Pitt's muscles and human tragedy. Peter O'Toole's Priam is shattering.

## 16. The Prince of Egypt (1998)

DreamWorks' animated masterpiece. It retells the story of Moses with Hollywood-Broadway songs.

## 15. Excalibur (1981)

John Boorman's gothic Arthurian adaptation redefined the genre by dragging mythological cinema into a misty, muddy, and mystical pit.

## 14. Noah (2014)

Darren Aronofsky's biblical epic, an artistic hallucination ranging from rock giant angels to the end of the world. Russell Crowe's Noah is monolithic.

## 13. The Odyssey (1997)

Andrei Konchalovsky's Emmy-winning mini-series, the great Odyssey adaptation before Nolan. Armand Assante's patient Odysseus.

## 12. Jason and the Argonauts (1963)

Ray Harryhausen's skeleton warriors and Talos figure represent the stop-motion golden age of mythological cinema.

## 11. Clash of the Titans (1981)

Again Harryhausen; Perseus's encounter with Medusa and the rise of the Kraken entered the dreams of generations.

## 10. The Passion of the Christ (2004)

Mel Gibson's bloody and uninterrupted crucifixion narrative, filmed in Aramaic-Latin. One of the most controversial examples of religious cinema.

## 9. Ben-Hur (1959)

William Wyler's 11-Oscar epic. The chariot race is still one of the most impressive action scenes in cinema history.

## 8. Black Orpheus (1959)

Marcel Camus's Orpheus adaptation set in the Rio carnival. A masterpiece with bossa nova music and tropical colors.

## 7. Ulysses (1954)

Kirk Douglas as Odysseus. Mario Camerini's Italian production is still surprising today with its audacity to fit the epic into 100 minutes.

## 6. Kagemusha (1980)

Akira Kurosawa's samurai films are the most powerful expressions of Japanese feudal mythology in epic cinema.

## 5. The Ten Commandments (1956)

Cecil B. DeMille's Moses. Charlton Heston, parting the sea, also expanded the boundaries of cinema mythology.

## 4. Spirited Away (2001)

Hayao Miyazaki's greatest gift to Shinto and Japanese folklore. The pinnacle of mythological cinema in animation.

## 3. Medea (1969)

Pier Paolo Pasolini's film with Maria Callas transforms Euripides into a modern archaeological lesson.

## 2. Orphée (1950)

Jean Cocteau's magical Orpheus modernization. It was embedded in cinema history with the figure of death passing through the mirror.

## 1. Andrei Rublev (1966)

Tarkovsky's film about the Russian Orthodox icon painter stands at the pinnacle as the noblest expression of the sacred and the mythological in cinema.`,
    image: mythologicalAsset.url,
    source: "The Guardian",
  },
  {
    slug: "evil-dead-tum-filmler-nerede",
    title: "Where to Watch All 'Evil Dead' Movies? The Franchise's One-Stop Guide",
    excerpt: "With the release of 'Evil Dead Burn,' the entire series started by Sam Raimi has been gathered on a single streaming platform. A practical guide to watching Ash's fight against the Deadites from start to finish.",
    body: `'Before the release of 'Evil Dead Burn,' it's worth revisiting not just the 2023 'Evil Dead Rise,' but the entire franchise. It's hard to complain about watching Ash fight Deadites, but first, you need to find them. Luckily, the entire series is in one convenient place, and you can find the sequel series at the same address.

## Where to watch all 'Evil Dead' movies?

With 'Evil Dead Burn' finally released, it's the perfect time to refresh the franchise — because there are said to be a number of connections beyond the latest installment of the series.

Here's where all previous films can be found:

- **The Evil Dead** (1981) – HBO Max
- **Evil Dead II** (1987) – HBO Max
- **The Army of Darkness** (1992) – HBO Max
- **Evil Dead** (2013) – HBO Max
- **Evil Dead Rise** (2023) – HBO Max

As can be seen, HBO Max has become a one-stop shop for the entire franchise. The sequel series 'Ash vs. Evil Dead' is also available on the same platform. This is an ideal configuration for 'completionist' viewers who want to watch the entire series sequentially while preparing for the new Sébastien Vaniček film.`,
    image: "/__l5e/assets-v1/ea493545-12b1-4a2d-99a4-e0bf71238dc0/e46c495fcf0b.webp",
    source: "TheWrap",
  },
  {
    slug: "hbo-max-bu-haftanin-en-iyi-3-filmi",
    title: "The 3 Best Movies on HBO Max This Week: 'Mask of the Phantasm', 'Evil Dead II', and 'Legally Blonde'",
    excerpt: "In a TV week full of Emmy nominations, HBO Max also makes a strong case for movie buffs with a Batman animated masterpiece, a horror classic, and one of the best comedies of the 2000s.",
    body: `It's a big TV week with Emmy nominations just announced. But HBO Max is also full of titles that will make movie lovers happy. This week, you can check out one of the best DC films of all time, a horror classic, and an excellent comedy from the early 2000s.

## "Batman: Mask of the Phantasm"

Anyone who even considers themselves a passive Batman fan should give this feature-length adventure set in the 'Batman: The Animated Series' universe a chance. Featuring the iconic Batman/Joker duo of Kevin Conroy and Mark Hamill, the film focuses on Bruce Wayne confronting a figure from his past, Andrea Beaumont (Dana Delany), whom he once loved enough to consider giving up the cape. The scene where Bruce visits his parents' grave is one of the character's most emotional moments on screen.

## "Evil Dead II"

A new 'Evil Dead' film, directed by Sébastien Vaniček, is released on Friday. These films have managed to stay strong from the beginning, but Sam Raimi's first two productions remain the greatest examples of 'cabin in the woods' horror. The increased element of dark humor in the second film (without ever softening the horror) is the icing on the cake. This splatter feast starring Bruce Campbell is terrifying, brutal, and extremely entertaining.

## "Legally Blonde"

Whatever you think of Prime Video's prequel series 'Elle', returning to 'Legally Blonde' is always a good idea. Directed by Robert Luketic and written by Karen McCullah Lutz and Kirsten Smith, the film is a funny and thought-provoking work about a woman (Reese Witherspoon) who climbs the legal ladder at Harvard, proving her detractors wrong. One of Witherspoon's best performances and one of the best comedies of the 2000s.`,
    image: "/__l5e/assets-v1/c6201118-3568-4be0-aaa3-60e0c40f7159/192b59f6e69f.webp",
    source: "TheWrap",
  },
  {
    slug: "bonnie-tyler-total-eclipse-en-iyi-5-film-sahnesi",
    title: "Top 5 Cinematic Moments of Bonnie Tyler's 'Total Eclipse of the Heart'",
    excerpt: "Bonnie Tyler's most powerful legacy after her death at 75: Five moments where 'Total Eclipse of the Heart' blew up the screen in comedy, drama, and horror films.",
    body: `We lost legendary husky-voiced singer Bonnie Tyler at 75. One of the greatest legacies she left behind is her 1983 power ballad 'Total Eclipse of the Heart' — and the unforgettable moments this song has created in movie theaters for decades. We're sharing the list compiled by Britt Hayes for Entertainment Weekly.

## 1. "Old School" (2003) — The Dan Band Sahnesi

The Dan Band's performance of the song at Frank's (Will Ferrell) wedding, reminiscent of Frank Sinatra, in Todd Phillips' cult comedy 'Old School' is one of the film's most famous scenes. This scene, along with Ferrell's dance with Perrey Reeves, is considered the beginning of the song's resurgence with 2000s nostalgia.

## 2. "Bandslam" (2009) — Karaoke Sahnesi

This song, sung by the characters in the teen musical drama 'Bandslam' during karaoke, is the film's most intimate emotional outburst. The sequence featuring Vanessa Hudgens and Aly Michalka proves the song's power to bridge generations.

## 3. "It's Always Sunny in Philadelphia" — The Nightman Cometh

Although technically a TV episode, the 'Total Eclipse' influences in the finale of 'The Nightman Cometh' musical episode are one of the most absurd examples of popular culture's obsession with this song.

## 4. "Urban Cowboy" (1980) — Pioneering Emotional Use

Actually, it's a precursor to the genre, with the use of another love-themed song released the same year, before Bonnie Tyler's hit. Tyler's song later became the template for country breakup scenes.

## 5. "The Perks of Being a Wallflower" (2012) — Kamyonet Sahnesinin Ruhu

It's not a film where the song is directly used, but it inherits its emotional DNA. As Britt Hayes reminds us in her writing, 'Total Eclipse of the Heart' actually stands at the heart of the canon of adolescent romance — Emma Watson's "I feel infinite" scene is an heir to this spirit.

Bonnie Tyler's voice is gone; but Jim Steinman's melodramatic notes have earned a lasting place in cinema history.`,
    image: bonnieTylerAsset.url,
    source: "Entertainment Weekly",
  },
  {
    slug: "paste-en-iyi-yeni-albumler-10-temmuz-2026",
    title: "12 New Albums to Listen to This Week (July 10, 2026)",
    excerpt: "From Finn Wolfhard's indie-rock debut to Jack White's blues-punk roar, from Kelela's R&B laboratory to Xiu Xiu's Eraserhead ode: Paste's New Music Friday picks for this week.",
    body: `Paste continues to be the heart of New Music Friday every Friday. This album compilation, released after the Best New Songs lists, brings together the twelve most striking records of the week of July 10. A cross-section ranging from rock, folk, electronic, and experimental.,

## Finn Wolfhard — Fire From The Hip

Finn Wolfhard's *Fire from the Hip* feels familiar on first listen: the scent of Sharp Pins, Alex G, Elliott Smith, and Pavement is obvious. But Wolfhard's confident, mischievous delivery steers clear of pastiche. "Lights Go Down" transforms Nicole Kidman's iconic and overused AMC speech into a melancholic commentary on an actor's movie-watching experience. George Clooney jokes on "Common Side Effects," George W. Bush jokes on "Maggie"; but country-folk strings in the background and the jam-band vibe of "Nice to Meet You Again" add a rich texture to the entire record.

## Houndmouth — Lordy

description: Arriving after five years of silence, *Lordy* is the most intimate Houndmouth album, born from Matt Myers' creative crisis. It reads like campfire music: seventies-influenced folk-rock tracks, sun-drenched Southern roads, a hazy fisheye scrapbook. In "Never Gonna Die," we get a trembling voice singing "this house we built / let's pray its boards don't rot." Sam Beam from Iron and Wine accompanies on "Holy Moses.",

## Hurry — Zoned Out

Matt Scottoline's power-pop project Hurry's sixth LP is a summary of mixed feelings about aging. "Everything's changing, I'm scared" is confessed in the sugary hooks of "The Dumbest Person You've Ever Seen." The interlude "Untitled" with its Cars-esque Moog riffs and "Moving After You" featuring vocals from Teenage Fanclub's Gerard Love bring the record into summer album discussions.

## Jack White — Frozen Charlotte

Jack White has found a way to filter modern songwriting through White Stripes' infectiousness. *Frozen Charlotte* is a new collection of blues-punk barn burners filled with giant guitar solos reminiscent of "Ball and Biscuit." The multi-part solo on the closing "Neighbors Blues" is proof that White can still shred.

## Kelela — new avatar

More than a decade after her emergence from the L.A. alt-pop scene, Kelela partially looks back and reinterprets her catalog in *new avatar*. The pulsating breaks of "point blank" recall both the grime rhythm of *Cut 4 Me* and the most club-oriented parts of *Raven*. Perhaps the most mature record of her career.

## Panda Bear / Sonic Boom — A ? of When

A record that stands out even in Panda Bear and Sonic Boom's years-long collaboration. The most mature example of their tradition of embedding unsettling lyrics into shimmering psych-pop.

## Sad13 — 1331

A 15-minute mixtape released by Sadie Dupuis of Speedy Ortiz under the moniker Sad13. JRPG dungeon music, cavernous organs, and programmed drums wander through thirteen short tracks.

## Show Me The Body — Alone Together

Show Me The Body has always considered New York hardcore a civic duty. Their fourth record, *Alone Together*, is a call to action based on "radical love." Thirteen tracks, pure sound packed into thirty-seven minutes.

## The Temper Trap — Sungazer

Returning after a decade, The Temper Trap are at their most inquisitive since their 2009 debut. "Giving Up Air" is the band's best work to date.

## Tracey Nelson — Hercules

This debut record from Perennial is country-rock perfection. With guest contributions from Karly Hartman, Jack Kraus, and MJ Lenderman, it navigates the minor heartbreaks of modern life with a calm nonchalance.

## Twisted Teens — Florida Water Blues

Twisted Teens don't use effects, Caspian isn't even in tune. "Just plug in and go." A tight and honest record full of spaghetti-western guitar rolls.

## Xiu Xiu — Eraserhead Xiu Xiu

Xiu Xiu's seven-track reinterpretation of David Lynch's 1977 *Eraserhead*. An underground built with homemade instruments, field recordings, flashlights, and electrical interference.`,
    image: "/__l5e/assets-v1/81dea29c-7607-46d8-8cdb-862da33018af/e88a980d1f2f.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-haziran-2026-en-iyi-10-sarki",
    title: "The 10 Best Songs of June 2026",
    excerpt: "From heavensouls' seven-minute collage to Lily Seabird's Americana headbanger, Kelela's broken beat to Mykki Blanco's queer flâneur tease — Paste's June 2026 favorites.",
    body: `We've selected ten tracks from the twenty featured in Paste's weekly Best New Songs column. These are the songs that will come to the table as the strongest contenders when discussions about the best of the year begin in December. Mykki Blanco and Kelela opened the month with brilliant dance music; The Tubs and the Sullivan siblings closed it with a rock and roll feast.

## heavensouls — "shipping times and quiet streets"

Nigerian-born, Houston-based rapper-producer Chidi Obialo's *westside trapped* record made it into the top five of our mid-year list. His new single "shipping times and quiet streets" is a ceremonial collage, colored by the agile jazz saxophone of fairy therapy and the Auto-Tune murmurs of Sidepeices partner Stickerbush. Details wrapped up over seven minutes.

## Kelela — "point blank"

The spirit of *Cut 4 Me* wanders through the West London broken beat of "point blank." Kelela's freshness returns in delays and breakbeats. Fade to Mind and Night Slugs ties permeate the entire track.

## L'Rain — "soulless cycle"

L'Rain's upcoming LP *Fata Morgana* emerges from grappling with the nation's "descent into fascism and trad culture." "soulless cycle" creeps in and explodes unexpectedly. A sound-textural answer to the question of what happens when crisis becomes routine.

## Lily Seabird — "Election Day"

This single, released for the Vermont songwriter's third record in three years, *Lightspheres On Their Way*, features rebellious distortion, screaming guitars, and outright wails. An Americana headbanger, a mosh pit gateway for folk.

## Mykki Blanco — "Little Feet"

The first tease of *CAFE PARADISO*. A full-fledged queer flâneur song, condensed into two minutes with the help of Ian Isiah and Breakaway. Bodies mingling under the streetlamp, a room furnished with dance and devotion.

## Sam & Louise Sullivan — "Working Girl"

The folk-rock chemistry of the Sullivan siblings reaches its most mature form in "Working Girl." The track, which wraps a narrative of a tired workday in soft vocal harmonies, offers the most human moment of the month.

## SML — "Spontaneous Live Music"

The improvisational jazz quartet's new single progresses through an agile bassline and the free dialogue of wind instruments. The live production aesthetic breathes life into the record.

## Tasha — "You Are Spring"

Poet-songwriter Tasha's album title track creates an image of spring with acoustic guitar and whispered vocals.

## The Tubs — "Illusion Pt. II"

The follow-up track from British jangle-pop band The Tubs nods to classic R.E.M. moments with its twin-guitar weaving. An anthem closing the month for rock.

## Kelsey Lu — "So Help Me God"

Cellist and singer Kelsey Lu's new album track is a prayer that moves between choral arrangements and electronic textures.`,
    image: "/__l5e/assets-v1/45386981-14ad-4204-8c7d-7aca07c9ae44/7341660cfb7d.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-bu-hafta-dinlenmesi-gereken-5-yeni-sarki-18-haziran-2026",
    title: "5 New Songs You Need to Hear This Week (June 18, 2026)",
    excerpt: "This week's song is Lily Seabird's 'Election Day.' Julia Jacklin, No Joy & Fire-Toolz, Saul Williams, and more: Paste's June 18, 2026 picks.",
    body: `Every Thursday, the Paste team and contributors select their five favorite songs of the week, giving one the title of "Song of the Week." Here are the five favorites for the week of June 18, 2026.

## Song of the Week: Lily Seabird — "Election Day"

Vermont songwriter Lily Seabird has announced her third record in three years, *Lightspheres On Their Way*. "Election Day" marks a return to a mode Seabird hasn't entered since 2024's "Dirge": rebellious distortion, screaming guitars, outright wails. Her vocal is still clear as a canary's warning, but it snags and tears at the edges of the words' emotion. An Americana headbanger, a mosh pit gateway for folk.

## Julia Jacklin — "Get Away From Me (I Think I'll Love You Soon)"

Julia Jacklin continues to be one of indie rock's most distinctive voices. The first single from her upcoming LP *The Gem* is about a hair-pulling, likely unrequited love affair. An interim solo shines between cloudy guitars and a marching rhythm.

## No Joy & Fire-Toolz — "Big Life, Big Leaf"

No Joy, once Jasamine White-Gluz's doom-shoegaze vehicle, has been drifting into a strange blend of synth-pop and techno for the past fifteen years. Following Fire-Toolz's Angel Marcloid-produced *Bugland* last year, this collaboration is sun-bleached dance music.

## Saul Williams feat. Moor Mother & Gonjasufi — "Conspiracy"

Saul Williams' upcoming solo album *Leaf Life*, his first in seven years, will host guests including Robert Del Naja of Massive Attack, Kamasi Washington, and many more. The first single "Conspiracy" features Moor Mother and Gonjasufi. An outpouring of Williams' "voice is an instrument" philosophy.

## The Tubs — "Illusion Pt. II"

The follow-up to *Cotton Crown* by British jangle-pop band The Tubs. The week's most refreshed anthem, nodding to classic R.E.M. moments with twin-guitar weaving.,`,
    image: "/__l5e/assets-v1/b7285837-6839-4b6d-995a-0c713eccf1ea/f2792b810467.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-beach-boys-tum-zamanlarin-en-iyi-25-sarkisi",
    title: "The Beach Boys' 25 Best Songs of All Time",
    excerpt: "On the 63rd anniversary of 'Surfin' U.S.A.', Paste compiles the peak of Brian Wilson and co.'s catalog: a listening guide from 'Caroline, No' to 'Heroes and Villains' to 'God Only Knows'.",
    body: `Sixty-three years ago, The Beach Boys released "Surfin' U.S.A." and the band scored their first #1 in the US. In the years that followed, the Brian Wilson-led Hawthorne, California group produced some of rock and roll's greatest songs and most influential records. 1966's *Pet Sounds* is one of the greatest records America has ever produced. Here are Paste's picks for the 25 best Beach Boys songs.

## 25. "Busy Doin' Nothin" (1968)

Brian Wilson lounge pop'a giriyor. *Friends*'in lo-fi sinsi cevheri. Burt Bacharach, Chris Montez ve bossa nova esintili.

## 24. "Big Sur" (1973)

The 2021 *Feel Flows* box-set version of this Mike Love-penned song is one of the most magical compositions in the band's catalog. A poetic tribute to the wonder of California's Central Coast.

## 23. "Please Let Me Wonder" (1965)

The B-side to *The Beach Boys Today!*. Pure pop glory, combining doo-wop surf-rock with Brian's orchestral vision preparing for *Pet Sounds*.

## 22. "Cabin Essence" (1967)

The closing track of *20/20*. Written by Brian and Van Dyke Parks as "a frozen frame of the Union Pacific Railroad."

## 21. "Feel Flows" (1971)

The only Carl Wilson composition on this list. Baldwin organ, Moog synth, and pianos with taped strings.

## 20. "I'm Waiting For the Day" (1966)

A sadness filled with Al de Lory's snake-like piano riff and Sid Sharp Strings' strings.

## 19. "Disney Girls (1957)" (1971)

Bruce Johnston's greatest Beach Boys contribution. A fantasy of Walt Disney movie stars, garage wine, and "open cars and clearer stars."

## 18. "Surfer Girl" (1963)

The first song Brian claimed to have written. Inspired by Dion and the Belmonts' rendition of "When You Wish Upon a Star."

## 17. "I Get Around" (1964)

America's answer to the British Invasion. Surf-rock, doo-wop energy, and that California sound.

## 16. "Caroline, No" (1966)

The closing track of *Pet Sounds*. Hal Blaine plays a Sparklett water bottle; Brian's dogs Banana and Louie also make an appearance.

## 15. "Heroes and Villains" (1967)

This opera-like piece, written for *Smile*, is an archive of early California history.

## 14. "The Night Was So Young" (1977)

The heart of *The Beach Boys Love You*. Lester Bangs called it "the band's best album."

## 13. "Don't Talk (Put Your Head On My Shoulder)" (1966)

Chromatic perfection. Elvis Costello: "If all the record players in the world broke tomorrow, these songs would still be audible a hundred years from now."

## 12. "'Til I Die" (1971)

Brian's existential crisis put to sound, written after his threat to jump off the Santa Monica pier.

## 11. "I Just Wasn't Made For These Times" (1966)

An epic ballad co-written with Tony Asher, featuring an Electro-Theremin solo.

## 10. "All I Wanna Do" (1970)

*Sunflower*'s dream-pop gem. A harbinger of a sound that would reach Panda Bear and M83 years later.

## 9. "Sail On, Sailor" (1973)

The opening track of *Holland*. Blondie Chaplin's vocal creates one of the band's most soul-influenced moments.

## 8. "Wouldn't It Be Nice" (1966)

The opening track of *Pet Sounds*. One of pop music's most perfect introductory pieces.

## 7. "In My Room" (1963)

A masterpiece about loneliness and taking refuge in one's room, written by Brian and Gary Usher.

## 6. "Surf's Up" (1971)

A long composition written by Brian and Van Dyke Parks for *Smile*, completed in 1971.

## 5. "California Girls" (1965)

A sunny manifesto inheriting Phil Spector's "Wall of Sound" legacy.

## 4. "Sloop John B" (1966)

*Pet Sounds*' folk song adaptation. One of the clearest moments of the band's harmonic genius.

## 3. "Good Vibrations" (1966)

"Pocket symphony." A three-and-a-half-minute pop miracle built with Electro-Theremin, cello, and musical transitions.

## 2. "God Only Knows" (1966)

A masterpiece that Paul McCartney called "the best song ever written." Carl Wilson's vocal and a French horn-led intro.

## 1. "Wouldn't It Be Nice / God Only Knows" — Pet Sounds Peak

The passage in the middle of *Pet Sounds*, the most perfect continuity pop music has ever produced.`,
    image: "/__l5e/assets-v1/f04225bc-4b45-42ec-87c7-a50de91a833e/cd0254496ddc.jpg",
    source: "Paste Magazine",
  },
  {
    slug: "paste-en-buyuk-en-iyi-orijinal-sarki-oscar-kazananlari",
    title: "The Greatest 'Best Original Song' Oscar Winners, Ranked",
    excerpt: "From 'My Heart Will Go On' to 'Moon River,' 'Flashdance…What a Feeling' to 'Arthur's Theme' — Paste compiled the 15 best winners from the Academy's 90-year history of Best Original Song.",
    body: `Each year, the Academy awards the best directors, actors, cinematographers, writers, makeup artists, and composers. Since 1935, the Academy has been handing out the Best Original Song Oscar. Con Conrad and Herb Magidson won the first award for "The Continental" from *The Gay Divorcee*; Johnny Mercer, Randy Newman, Giorgio Moroder, Henry Mancini, Burt Bacharach, and Elton John have won multiple times. Paste ranked the 15 best winners from 90 years of history.

## Honorable Mention: "Man or Muppet" (*The Muppets*, 2011)

Walter's piano ballad, voiced by Jason Segel and Peter Linz. Written by Bret McKenzie, it carries a heart that resonates across all generations, despite being a children's film.

## 15. "My Heart Will Go On" (*Titanic*, 1997)

18 million sales worldwide, four Grammys, #1 in 30 countries. Celine Dion gave *Titanic* its soul. A pop culture treasure that even surpassed its source film.

## 14. "Arthur's Theme (Best That You Can Do)" (*Arthur*, 1981)

Christopher Cross's piano ballad. The line "when you get caught between the moon and New York City" is a phrase that conveys the New York dream to generations.

## 13. "Moon River" (*Breakfast at Tiffany's*, 1961)

Composed by Henry Mancini, Audrey Hepburn's performance as Holly Golightly on the fire escape.

## 12. "Flashdance…What a Feeling" (*Flashdance*, 1983)

An anthem written by Giorgio Moroder and Keith Forsey with Irene Cara, single-handedly summarizing the 1980s pop movement.

## 11. "The Way You Look Tonight" (*Swing Time*, 1936)

An immortal standard by Jerome Kern and Dorothy Fields, originally performed by Fred Astaire.

## 10. "Streets of Philadelphia" (*Philadelphia*, 1993)

Bruce Springsteen's lament, sung with a muted bass synth. One of the most humane pop songs written about AIDS and exclusion.

## 9. "Falling Slowly" (*Once*, 2007)

A folk duet performed by Glen Hansard and Markéta Irglová. The biggest award won by a low-budget Irish film.

## 8. "Skyfall" (*Skyfall*, 2012)

Adele's James Bond anthem. The most mature theme song in the series.

## 7. "Lose Yourself" (*8 Mile*, 2002)

Eminem's first Oscar for rap. The rawest, most honest depiction of the "one shot" theme.

## 6. "Shallow" (*A Star Is Born*, 2018)

Lady Gaga and Bradley Cooper's duet. The most resonant declaration of love of the past decade.

## 5. "Let It Go" (*Frozen*, 2013)

Idina Menzel's power song, defining the last fifteen years of animated musicals.

## 4. "Over the Rainbow" (*The Wizard of Oz*, 1939)

Judy Garland's rendition, perhaps the most iconic moment in American popular music.

## 3. "The Windmills of Your Mind" (*The Thomas Crown Affair*, 1968)

A surreal thought cycle written by Michel Legrand and the Bergmans, performed by Noel Harrison.

## 2. "White Christmas" (*Holiday Inn*, 1942)

Irving Berlin classic. Bing Crosby's interpretation remains the best-selling single of all time.

## 1. "Days of Wine and Roses" (*Days of Wine and Roses*, 1962)

The pinnacle of the canon by Henry Mancini and Johnny Mercer. A masterpiece about alcohol and loss, transformed into a jazz standard.`,
    image: "/__l5e/assets-v1/aba2a09d-1e66-4497-a3b9-b732fc76d665/26c30f530c88.jpg",
    source: "Paste Magazine",
  },
  {

    slug: "bbc-temmuz-2026-izlenecek-10-film",
    title: "From Spider-Man to The Odyssey: 10 Films to Watch in July, According to BBC",
    excerpt: "In a month where Tom Holland and Zendaya star in two of the year's biggest blockbusters, BBC Culture critic Nicholas Barber picks his top 10 films for cinema and home screens this July.",
    body: `BBC Culture critic Nicholas Barber has compiled his top 10 films to watch in cinemas and at home for July 2026. The month features two massive productions starring Tom Holland and Zendaya: Sony's 'Spider-Man: Brand New Day' and Christopher Nolan's 'The Odyssey'. But the list isn't just about tentpoles.

## 1. Evil Dead Burn
The new installment in the Sam Raimi universe — this time wilder, bloodier, and surprisingly emotional.

## 2. Spider-Man: Brand New Day
Tom Holland's fourth outing as Peter Parker; positioned as the MCU's reset point.

## 3. The Odyssey
Christopher Nolan's adaptation of Homer. Matt Damon as Odysseus; Zendaya as Penelope. IMAX 70mm shot.

## 4. Superman: Man of Tomorrow
James Gunn's sequel to the new DCU universe. David Corenswet solidifies his role as Superman.

## 5. Bugonia
Yorgos Lanthimos's reinterpretation of 'Save the Green Planet'. Emma Stone in the lead role.

## 6. Ella McCay
James L. Brooks's new film after a long hiatus; Emma Mackey and Woody Harrelson in the cast.

## 7. The Naked Gun
Reboot. Liam Neeson in Leslie Nielsen's role — and surprisingly, it works.

## 8. Splitsville
Michael Angelo Covino's marriage comedy; emerged with praise from Sundance.

## 9. Sorry, Baby
Eva Victor's feature debut; a fresh take on the post-trauma comedy genre.

## 10. Together
Michael Shanks's dark comedy-horror hybrid; Alison Brie and Dave Franco in the lead roles.`,
    image: "/__l5e/assets-v1/6d939522-d231-4a43-91ff-02b07e8aff5f/a80f8bb516fd.webp",
    source: "BBC Culture",
  },
  {
    slug: "ew-en-iyi-binge-dizileri",
    title: "Binge-Worthy: EW's Top 45 Shows to Watch in One Sitting",
    excerpt: "From Noah Wyle's 'The Pitt' to 'Fleabag', 'Over the Garden Wall' to 'The Americans' — Entertainment Weekly's binge list of 45 shows you can fit into a weekend.",
    body: `The streaming era has transformed the habit of finishing an entire season in one go into almost a cinematic experience. Entertainment Weekly's updated list (July 3, 2026), by Robert English and Kevin Jacobsen, compiles the 45 most suitable shows for binge-watching. Below is EW's full list in alphabetical order, along with a brief English summary of each title.

## 1. Abbott Elementary (2021–)
Quinta Brunson's mockumentary comedy set in a Philadelphia public school. Warm, smart, and 22 minutes per episode: classic binge fuel.

## 2. Adolescence (2025)
A four-part Netflix drama starring Stephen Graham, filmed in a single shot. A harrowing work exploring adolescence, social media, and the father-son relationship around a murder investigation.

## 3. Baby Reindeer (2024)
Richard Gadd's harassment-trauma drama adapted from his own story. A 7-episode Netflix shocker, notable for Jessica Gunning's Emmy-winning performance as Martha.

## 4. Bait (2026)
A Prime Video drama starring Riz Ahmed. It follows an actor, a candidate for the James Bond role, as he grapples with identity and shame.

## 5. The Bear (2022–2026)
Jeremy Allen White's Carmy; an FX series set in a Chicago sandwich shop, transforming kitchen stress into a poetic drama of anxiety. Completed in 4 seasons.

## 6. Black Doves (2024–)
A Netflix spy thriller starring Keira Knightley and Ben Whishaw. A fast-paced assassination opera set on Christmas-themed London streets.

## 7. Bodyguard (2018)
A BBC thriller starring Richard Madden. A 6-episode prototype for "finishes in one night," raising heart rates by the minute.

## 8. Chernobyl (2019)
Craig Mazin's HBO miniseries. It meticulously recounts the bureaucracy and human error behind the 1986 nuclear disaster with precise horror.

## 9. The Comeback (2005; 2014; 2026)
Lisa Kudrow's Valerie Cherish is back. The new season of HBO's cult cringe comedy completes the trilogy.

## 10. Death Note (2006–2007)
An anime classic adapted from Tsugumi Ohba and Takeshi Obata's manga. The duel of wits between Light and L concludes in 37 episodes.

## 11. Dying for Sex (2025)
An FX miniseries starring Michelle Williams. It adapts a true podcast about a woman diagnosed with terminal cancer who embarks on sexual liberation.

## 12. Enlightened (2011–2013)
Mike White's early masterpiece. Laura Dern's Amy Jellicoe paints a portrait of an "enlightened" midlife crisis. 18 episodes.

## 13. Firefly (2002–2003)
Joss Whedon's space-western. Though canceled after one season, it became a cult classic; 14 episodes + the Serenity movie make an ideal weekend package.

## 14. Fleabag (2016–2019)
Phoebe Waller-Bridge's two-season miracle that redefined television with her fourth-wall breaks. 12 episodes, a perfect Saturday.

## 15. Freaks and Geeks (1999–2000)
Judd Apatow and Paul Feig's short-lived classic set in a 1980 Michigan high school. A legendary cast featuring young Seth Rogen, James Franco, Linda Cardellini.

## 16. The Girlfriend (2025)
A Prime Video psychological thriller starring Robin Wright. It tells the power struggle between a mother and her son's girlfriend from two perspectives.

## 17. Hacks (2021–2026)
Jean Smart and Hannah Einbinder's intergenerational comedian duo. HBO Max's Emmy magnet, concluded with its fifth and final season.

## 18. The Haunting of Hill House (2018)
Mike Flanagan's Shirley Jackson adaptation. A 10-episode Netflix assignment combining family drama with horror.

## 19. Heartstopper (2022–2024)
A Netflix romantic teen series adapted from Alice Oseman's graphic novel. A warm world completed in three short seasons.

## 20. Heated Rivalry (2025–)
A Crave adaptation of Rachel Reid's queer ice hockey novel. The secret, years-long relationship between two rival NHL stars.

## 21. I May Destroy You (2020)
Michaela Coel's HBO/BBC masterpiece, which she wrote, directed, and starred in. It dissects consent and trauma in 12 episodes.

## 22. Jury Duty (2023–) 
Freevee's improvised fake jury experiment. A social experiment comedy where Ronald Gladden is completely unaware.

## 23. Love Story (2026–)
An FX series by Ryan Murphy. Sarah Pidgeon and Paul Kelly as Carolyn Bessette and JFK Jr.

## 24. Mare of Easttown (2021)
Kate Winslet's Emmy-winning Delaware County detective. A 7-episode HBO miniseries, a textbook example for "small-town noir."

## 25. Margo's Got Money Troubles (2026–)
An Apple TV+ adaptation of Rufi Thorpe's novel. Elle Fanning and Michelle Pfeiffer in a story about a young mother with a wrestler father.

## 26. The Night Of (2016)
Riz Ahmed's breakout 8-episode HBO crime drama. A claustrophobic X-ray of the American justice system.

## 27. Normal People (2020)
Hulu/BBC adaptation of Sally Rooney's novel. The duo of Paul Mescal and Daisy Edgar-Jones, the year's most meticulous love story.

## 28. Over the Garden Wall (2014)
Patrick McHale's 10-episode Cartoon Network miniseries. Autumn atmosphere, Elijah Wood's voice, and a timeless fairy tale tone.

## 29. Overcompensating (2025–)
Benito Skinner's Prime Video comedy series. It tells the story of coming out in his freshman year of college with sharp humor.

## 30. Paradise (2025–)
Dan Fogelman's Hulu thriller starring Sterling K. Brown. A post-assassination political conspiracy meets science fiction.

## 31. The Pitt (2025–)
Noah Wyle's HBO Max series, depicting a 15-hour shift in a Pittsburgh emergency room in real-time. The strongest new drama of 2026.

## 32. Pluribus (2025–)
Vince Gilligan's new Apple TV+ sci-fi with Rhea Seehorn. The only person resisting a global happiness epidemic.

## 33. The Queen's Gambit (2020)
A Netflix miniseries starring Anya Taylor-Joy. The 7-episode rise of a female chess prodigy during the Cold War era.

## 34. Schitt's Creek (2015–2020)
Eugene and Dan Levy's Canadian comedy. The warm transformation of a family fallen from wealth over six seasons.

## 35. Sense8 (2015–2018)
The Wachowski sisters' psychological bond epic spanning eight continents on Netflix. A visual feast and a cult classic.

## 36. Severance (2022–present)
Dan Erickson's Apple TV+ series. Adam Scott's "innie/outie" employees at Lumon Industries, the most original concept of the 2020s.

## 37. Shōgun (2024–)
An FX adaptation of James Clavell's novel. Anna Sawai, Hiroyuki Sanada, and Cosmo Jarvis's 17th-century Japan epic swept the Emmys.

## 38. Shrinking (2023–)
Bill Lawrence, Brett Goldstein, and Jason Segel's Apple TV+ comedy-drama. Harrison Ford's late-career surprise.

## 39. Squid Game (2021–2025)
Hwang Dong-hyuk's Netflix phenomenon. A class struggle allegory completed in three seasons, it became a global event.

## 40. The Studio (2025–)
Seth Rogen's Apple TV+ Hollywood satire. It tells the chaotic first year of a studio head with Kathryn Hahn and a large ensemble cast.

## 41. Survivor (2000–present)
Jeff Probst's CBS reality classic. With 45+ seasons, it's the only show on the list that requires "making time to binge."

## 42. The Traitors (2023–)
Alan Cumming-hosted Peacock reality thriller. A social deception game, paced to be finished in two nights.

## 43. Twin Peaks (1990–1991)
David Lynch and Mark Frost's mysterious town drama on ABC that changed the grammar of television. Who killed Laura Palmer?

## 44. The White Lotus (2021–)
Mike White's HBO anthology. A class satire set in a different luxury resort each season; three star-studded casts in three seasons.

## 45. Widow's Bay (2026–)
Matthew Rhys's Apple TV+ mystery. A new discovery with a foggy-noir aesthetic, tracking a missing girl in a coastal town.`,
    image: "/__l5e/assets-v1/0533f2d0-cc82-4ff7-be8b-7217b8fec22b/ew-binge-45.webp",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-hulu-en-iyi-gerilim-dizileri",
    title: "Hulu'da Nefes Kesen 24 Gerilim Dizisi",
    excerpt: "From 'Fargo' to 'Only Murders in the Building,' from 'The Americans' to 'The Handmaid's Tale' — Entertainment Weekly's 24 thrilling series from Hulu's catalog that will keep you glued to your seat.",
    body: `Entertainment Weekly's list, penned by Gwen Ihnat and Kevin Jacobsen, unearths 24 thrilling series hidden within Hulu's extensive catalog. Their common denominator: At the end of each episode, you'll start the next one without even thinking about it.

## Crime and dark humor
Noah Hawley's *Fargo* is on the list with all its seasons — especially season 4 with Chris Rock. The trio of Steve Martin, Martin Short, and Selena Gomez in *Only Murders in the Building* is a modern classic that doesn't skimp on the murder-comedy dose.

## Espionage and paranoia
*The Americans*, starring Keri Russell, tells the story of KGB spies' family life during the Cold War, positioning itself as one of the genre's peaks in the last 20 years. The early seasons of *Homeland* and *The Looming Tower* are also in this category.

## Dystopia and psychological thriller
Elisabeth Moss's *The Handmaid's Tale* completed its six-season journey in 2025. The list also includes Amy Adams's *Sharp Objects*, episodes of *The Bear* that highlight its thriller aspect, and *Dopesick*.

## Surprise picks
Lesser-discussed productions like *Under the Banner of Heaven*, *A Murder at the End of the World*, *The Patient*, and the darker episodes of *Reservation Dogs* are also on the EW team's radar.`,
    image: "/__l5e/assets-v1/c5933f01-6f8e-4e7c-88a4-a5ee1e94947a/hulu.webp",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-mart-2025-yenilikler",
    title: "March on Netflix: '50 First Dates', 'Ma', 'The Residence' and More",
    excerpt: "From the Adam Sandler-Drew Barrymore classic '50 First Dates' to Meghan Markle's new reality series, Millie Bobby Brown's film, and Chelsea Handler and John Mulaney's stand-up specials — Netflix's March 2025 catalog update.",
    body: `Ryan Coleman from Entertainment Weekly has compiled Netflix's extensive catalog update for March 2025. Subscribers can expect a month that's a mix of nostalgia, original drama, and stand-up.

## Nostalgic returns
*50 First Dates* (2004) — Adam Sandler and Drew Barrymore's modern rom-com classic is back on Netflix. *Friday* (1995) and *Next Friday* (2000), the cult comedy duo with Ice Cube and Chris Tucker, are also being added to the library. Also *The Karate Kid* trilogy, *Bruce Almighty*, and *Legally Blonde 2*.

## Original series
*The Residence* — Shonda Rhimes' new Netflix series. A White House murder-mystery production starring Uzo Aduba. *With Love, Meghan* — Meghan Markle's lifestyle reality series. *Adolescence* — A four-part British mini-series starring Stephen Graham.

## Films
*The Electric State* — A retro-futuristic adventure directed by Anthony and Joe Russo, starring Millie Bobby Brown and Chris Pratt. *Plankton: The Movie* — An animated spin-off from the SpongeBob universe. *Ma* (2019) — Octavia Spencer's psychological thriller.

## Stand-up
New stand-up specials from Chelsea Handler and John Mulaney will be on the platform this month.`,
    image: "/__l5e/assets-v1/0d45694a-9768-47d5-8f11-8366afddb87d/netflix-march.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "ew-netflix-en-iyi-aile-filmleri",
    title: "Netflix's Top 20 Family Movies: From 'Chicken Run' to 'Matilda'",
    excerpt: "Wesley Stenzel's list for EW brings together 20 Netflix movies that both children and adults can watch: 'Rango', 'Galaxy Quest', 'Nimona', and more.",
    body: `Entertainment Weekly writer Wesley Stenzel has selected Netflix's top 20 family movies. A diverse list ranging from Aardman's clay animations to contemporary animated hits, and classic comedies.

## Animation classics
*Chicken Run* (2000) — Aardman's escape-themed stop-motion masterpiece. *Rango* (2011) — Gore Verbinski's Oscar-winning western animation starring Johnny Depp. *Klaus* (2019) — Netflix's own original animation, a hand-drawn Christmas story.

## Next-gen favorites
*Nimona* (2023) — Adapted from ND Stevenson's graphic novel, Netflix's queer-themed medieval fantasy animation. *The Sea Beast* (2022) — Oscar-nominated production about sea monster hunters.

## Live-action classics
*Matilda* (1996) — Roald Dahl adaptation, directed by Danny DeVito. *Galaxy Quest* (1999) — The gold standard of sci-fi parody; a perfect introduction for both kids and adults. *The Adventures of Sharkboy and Lavagirl* (2005) — Robert Rodriguez's children's fantasy film, now with cult status.

## World cinema
*A Cat in Paris* (2010) — French-made Oscar-nominated animation. *The Boy, the Mole, the Fox and the Horse* (2022) — Adapted from Charlie Mackesy's illustrated book, BAFTA and Oscar winner.

## Why is this list important?
According to Stenzel, the "family movie" label should not be reduced to a children's film; the best examples are multifaceted productions where different age groups can read different layers simultaneously. These 20 films perfectly hit this formula.`,
    image: "/__l5e/assets-v1/f3677a5e-8d50-4a4b-909c-51c809f1a54e/family.jpg",
    source: "Entertainment Weekly",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-dizisi-bbc",
    title: "From Ted Lasso to The Shards: 10 Must-Watch Series in August",
    excerpt: "From the return of Apple TV's football comedy to a dark teen thriller by Ryan Murphy, from DC's new superhero series Lanterns to Conan O'Brien's road stories — Caryn James's August picks from BBC Culture.",
    body: `Late summer television is unusually crowded this year. Caryn James from BBC Culture has selected ten productions set to air throughout August: comebacks, adaptations, and genre experiments.

## 1. Fightland (July 31 — Starz / August 27 — Sky & NOW)
A revenge drama set in the world of boxing and drug cartels. Produced by Curtis "50 Cent" Jackson. Heavyweight champion Duke Kilroy (Howard Charles) returns to London to confront the drug lord who framed him, after serving eight years in prison for a murder he didn't commit.

## 2. Ted Lasso (August 5 — Apple TV)
The series we thought was over returns after three years. Ted (Jason Sudeikis) returns to London from Kansas City to coach Rebecca's (Hannah Waddingham) newly formed Richmond women's team. The cast includes Brett Goldstein, Juno Temple, Jeremy Swift, and newcomer Tanya Reynolds.

## 3. The Shards (August 5 — Hulu / August 6 — Disney+)
A Ryan Murphy production, adapted from Bret Easton Ellis's 2023 semi-autobiographical novel, the series is set in 1981 Los Angeles. High school senior Bret (Igby Rigney) is drawn into a coming-of-age story under the shadow of a serial killer named "The Traveler" when new student Robert (Homer Gere) arrives at school. Kaia Gerber is also in the cast.

## 4. Sterling Point (August 5 — Prime Video)
A teen melodrama full of family secrets, created by Megan Park, known for "My Old Ass." Twin siblings Annie (Ella Rubin) and Connor (Keen Ruffalo) inherit an island in Canada from grandparents they never knew.

## 5. Alley Cats (August 7 — Netflix)
An adult animated British comedy created and voiced by Ricky Gervais. A gang of street cats asks existential questions and swears a lot. Gervais's description is clear: "I hope you like cats and swearing."

## 6. Reacher (August 12 — Prime Video)
Alan Ritchson's Jack Reacher returns for a new season; the Lee Child adaptation is August's most guaranteed hit for action lovers.

## 7. My Brilliant Career (August 13 — Netflix)
A new adaptation of Miles Franklin's classic Australian novel; the story of a young woman who wants to become a writer at the end of the 19th century.

## 8. Lanterns (August 16 — HBO Max)
DC's new superhero series; Kyle Chandler and Aaron Pierre's Green Lanterns transform the superhero format into a rural detective story.

## 9. Conan O'Brien Must Go (August 21 — HBO Max)
Conan O'Brien's travel comedy, where he travels the world to visit fans he met online in their homes, returns with new episodes.

## 10. Dark Matter (August 28 — Apple TV)
The parallel universe thriller adapted from Blake Crouch's bestselling novel continues with its second season; Joel Edgerton reprises his lead role.`,
    image: "/__l5e/assets-v1/62da9ae1-b2b3-481e-b623-517b76967f1d/4bde2a1381a0.webp",
    source: "BBC Culture",
  },
  {
    slug: "agustos-ayinin-en-iyi-10-filmi-bbc",
    title: "From The Dog Stars to One Night Only: 10 Must-See Films in August",
    excerpt: "Ridley Scott's post-apocalyptic thriller with Jacob Elordi, Eli Roth's ice cream killer, Anthony Bourdain's youth, and the shelved Coyote vs Acme — Nicholas Barber's August picks for BBC Culture.",
    body: `August is an unusually busy month, both in cinemas and at home. Nicholas Barber from BBC Culture has selected ten films that will make their mark this month: from an absurd rom-com to Ridley Scott's new dystopia, from Cannes' most critically acclaimed film to a Looney Tunes adaptation shelved for years.

## 1. One Night Only (August 7 US/Canada — August 28 UK)
Ostensibly a typical romantic comedy: two attractive New Yorkers played by Monica Barbaro and Callum Turner, directed by Will Gluck, who also directed "Friends with Benefits" and "Anyone but You." But Travis Braun's script has a strange hook: an alternate reality where singles are forbidden from having sex except for one night a year. The idea, dubbed "Purge for sex" online, made the film a topic of discussion before its release. Turner's advice to The Hollywood Reporter is clear: "If you lean into the absurdity, you'll have a good time. If you're going to get hung up on the rules, go watch a documentary."

## 2. Ice Cream Man (August 12–14, international)
Eli Roth, director of "Cabin Fever" and "Hostel," returns to low-budget, bloody horror. Ari Millen plays a mysterious ice cream man who travels through rural America, turning children into killing machines with the ice cream he sells. Roth's goal is not modest: "I want it to be the craziest movie I've ever made. Like The Birds, but with kids… So, completely insane."

## 3. The Dog Stars (August 7 US/Canada — August 21 UK)
Ridley Scott is 88, but he's never been more prolific. In this post-apocalyptic thriller adapted from Peter Heller's novel, survivors of a near-future flu pandemic include a pilot (Jacob Elordi), a medic (Margaret Qualley), and a former marine (Josh Brolin). Elordi's comment on Scott: "He's been connected to cinema his whole life — it's in his blood. I'm watching cinema sustain a life."

## 4. Tony (August 6–7, international)
Anthony Bourdain, who passed away in 2018, was a rock star of food and travel writing; he therefore deserves a rock star origin story. Inspired by "Kitchen Confidential," the film is set in the mid-1970s, during Bourdain's college dropout years when he worked in a restaurant in Provincetown. Director Matt Johnson; 19-year-old Bourdain is played by Dominic Sessa ("The Holdovers"), and the chef who mentored him is played by Antonio Banderas. Leo Woodall and Emilia Jones are also in the cast.

## 5. Teenage Sex and Death at Camp Miasma (August 14, US)
The most critically acclaimed film at Cannes this year. In Jane Schoenbrun's ("I Saw the TV Glow") surreal postmodern comedy, Hannah Einbinder ("Hacks") plays a queer director tasked with reviving a Friday the 13th-like slasher series and making it "acceptable" for young liberal audiences. Her idea is to bring back the actress who starred in the first film (Gillian Anderson) — but that actress now lives as a recluse at the summer camp where the film was shot. Jessica Kiang from Variety: "A steamy stew of sex, death, VHS, and junk food; Schoenbrun's most mature and playful film."

## 6. The End of Oak Street (August 20–28, international)
A dinosaur film written and directed by David Robert Mitchell, director of "It Follows," and produced by JJ Abrams. Anne Hathaway and Ewan McGregor are ordinary parents in an ordinary suburb — the only problem is that the neighborhood has somehow been teleported into a primeval wilderness. Abrams: "I love the Jurassic movies as much as anyone, but they take place in beautiful forests, on remote islands. David's approach was to juxtapose ordinary suburban life with dinosaurs."

## 7. The Wrong Girls (August 7 US — August 14 UK)
Two friends smoke too much weed and tumble into a dangerous criminal underworld: one of the rare examples that breaks the exclusively male cast tradition of the genre, from "Up in Smoke" to "Pineapple Express." Kristen Stewart and Alia Shawkat play the lazy duo who stumble upon a shipment of experimental miracle drugs; Seth Rogen and Kumail Nanjiani voice the talking cats during their hallucinations. Writer-director Dylan Meyer: "I joked throughout the shoot that these were my memories — which is pretty funny since there are giant squids and telepathy in the movie."

## 8. Union County (August 21, US/Canada)
Will Poulter and Noah Centineo play two opioid-addicted brothers in rural Ohio trying to stay sober and hold down jobs to avoid prison. First-time writer-director Adam Meeks grew up in Ohio; almost all the other people in the recovery program are non-professional actors telling their own stories. Chase Hutchinson from The Wrap: "The film earns every emotional beat; it's filled with such quiet humanity that you feel like you're sitting at the tables with them."

## 9. Coyote vs Acme (August 26–28, international)
A film we never thought we'd see. This Roger Rabbit-style live-action–2D animation hybrid focuses on Wile E. Coyote and the Roadrunner: in the classic cartoons, Coyote constantly buys faulty gadgets, and this time he sues the company that sells them; Will Forte plays his lawyer. Warner Bros shelved the film three years ago for a tax write-off (as with "Batgirl"); now it's being released by an independent company. Screenwriter Samy Burch: "There's a beauty in trying even after failing a hundred times."

## 10. The Magic Faraway Tree (August 21, US/Canada)
Simon Farnaby, co-writer of "Paddington 2" and "Wonka," modernizes Enid Blyton's classic children's novels. An inventor couple (Claire Foy and Andrew Garfield) move their three children to a remote cottage in the countryside to get them away from the internet; the children discover a tree whose branches are portals to other worlds. Silky (Nicola Coughlan), Moonface (Nonso Anozie), Dame Washalot (Jessica Gunning), and the wicked Dame Snap (Rebecca Ferguson) are also in the cast. Phil de Semlyen from Time Out: "A smart update of Blyton's stories for the smartphone age."`,
    image: "/__l5e/assets-v1/1888ebd5-2a74-4f79-88f5-981ada8aa718/2fcf98a1ee08.webp",
    source: "BBC Culture",
  },
  {
    slug: "game-of-thrones-en-iyi-10-ani",
    title: "Game of Thrones' Top 10 Moments: Not the Grand Battles, But the Silences Before the Storm",
    excerpt: "Giddy Up America's selection sets aside the show's massive set pieces and focuses on those small moments of tension before the explosion — from barking dogs to Roose Bolton's armor, to that look on Littlefinger's face.",
    body: `It's not easy to talk about the legacy of Game of Thrones: on one hand, epic battles, shocking deaths, and breathtaking episodes; on the other, a rushed finale that contradicted everything that came before it. But the list maker's suggestion is this: the show's true power lies in those small moments before the storm. The fireworks were what stuck in memory, but what truly hit home was often the silence just before the explosion.

## 10. The Mountain trips Oberyn's leg — "The Mountain and the Viper" (S4, E8)
The Prince of Dorne, who arrived in Westeros after the Red Wedding, almost pulled off a surprise as Tyrion's champion. But our man started celebrating five meters too early — a rookie mistake. When he wasn't looking, the Mountain took his eyes, then his skull. Watching the sudden demise of a fresh, new character and a potential force against the Lannisters was a difficult scene.

## 9. Jon watches Rickon die — "Battle of the Bastards" (S6, E9)
Second lesson: don't run in a straight line from a psychopath. Rickon took the arrow in his back, and Jon threw his carefully laid plan out the window, attacking Ramsay's army alone. Jon, who had seemed cold-blooded since his resurrection, giving in to his emotions was both surprising and a move perfectly fitting for him.

## 8. Littlefinger realizes his turn has come — "The Dragon and the Wolf" (S7, E7)
The reunion of the Stark siblings in the seventh season didn't deliver as expected; the tension between Sansa and Arya exhausted the audience. Then both of them fooled us, and Littlefinger too. The expression on the face of the man who had been scheming in the shadows for seven seasons, when he realized that it was he, not Arya, who was being judged, is one of the most satisfying frames of the series.

## 7. Margaery suspects Cersei won't come to her trial — "The Winds of Winter" (S6, E10)
The Sparrows had taken over Westeros's mind, and everyone had come to Cersei's trial — everyone except Cersei. Margaery saw the danger that the High Sparrow didn't and tried to get everyone out of there. She wasn't listened to. Then they all died. Except Cersei.

## 6. Tormund learns Brienne isn't a knight — "A Knight of the Seven Kingdoms" (S8, E2)
Those who live outside a system are best at seeing its flaws. Jaime knighting Brienne was the most poignant moment of the flawed eighth season; but Tormund's "Why isn't Brienne a knight?" reaction was the real clincher.

## 5. Night's Watch rangers find the bodies left by the White Walkers — "Winter is Coming" (S1, E1)
The series didn't open with the Starks, the Lannisters, or dragons, but with meticulously arranged bodies north of the Wall and a Wight. This was the path the producers chose to start the show — even if the story went elsewhere afterward, it's one of the best ways to open a series.

## 4. Daenerys tricks the slave trader while buying the Unsullied — "And Now His Watch Has Ended" (S3, E4)
We had learned in the first two seasons that Daenerys was not to be underestimated: she was someone who walked into fire and emerged with three dragon hatchlings. But the moment she seemed willing to give a dragon in exchange for the Unsullied, and then the trick she played on the trader, became the scene that permanently cemented her reputation.

## 3. Catelyn Stark sees Roose Bolton's armor and understands what happened at the Twins — "The Rains of Castamere" (S3, E9)
We were all in shock at the Red Wedding; Catelyn wasn't. The moment she made eye contact with Roose and confirmed the betrayal was a detail that becomes much clearer on a second viewing: everything happens so fast and darkly that it's missed the first time. Lesson: listen to your mother.

## 2. Dogs start barking at Hardhome — "Hardhome" (S5, E8)
The list maker's favorite battle. The last twenty minutes are like a horror-action movie: everything seems to be going to plan when the dogs start barking, the wind turns, the command "Close the gates!" comes, and each time someone doesn't make it to the gate. Then the Night King looks at Jon and raises the dead: the moment the show said, "we're not kidding."

## 1. Daenerys sails for Westeros — "The Winds of Winter" (S6, E10)
Finally. After six seasons of crossing deserts, being captured, escaping death, and raising dragons, Daenerys was finally setting sail for Westeros. The show, always grand in scale, began to narrow from this moment on, stories finally started to connect — and that flowing music accompanying the fleet of ships became the series' most magnificent finale.`,
    image: "/__l5e/assets-v1/856a6902-7d72-4e6d-8395-dde39eed016c/9ed45e0eb91b.jpg",
    source: "Giddy Up America",
  },
  {
    slug: "mark-ruffalo-en-iyi-15-filmi",
    title: "Mark Ruffalo's Top 15 Films: From Spotlight to Zodiac",
    excerpt: "Metacritic ranked Mark Ruffalo's career based on critic scores. 15 films ranging from independent dramas to Marvel blockbusters, from justice-seeking journalists to Victorian-era comedies.",
    body: `Mark Ruffalo is one of those rare actors who can exist with equal ease in both independent cinema and the world's biggest film franchise. Metacritic has ranked Ruffalo's top 15 films based on critic scores — we're counting down.

## 15. Collateral (2004)
![Collateral](/__l5e/assets-v1/ef582f8a-ca37-4614-9116-89bbb74578f6/5561bce62a75.webp)
Ruffalo plays LAPD detective Ray Fanning in Michael Mann's tense crime thriller. While his role is small in a film carried by Tom Cruise and Jamie Foxx, Ruffalo leaves a memorable presence in Mann's nocturnal Los Angeles.

## 14. Where the Wild Things Are (2009)
![Where the Wild Things Are](/__l5e/assets-v1/ab3524f0-6f62-4630-a95e-30e6446b3e84/d0f48de7e7c5.webp)
Spike Jonze's melancholic adaptation of Maurice Sendak's classic. On the way to the island of eight-year-old Max, whose imagination is big and emotions even bigger, Ruffalo represents the adult world framing the fragility of childhood.

## 13. What Doesn't Kill You (2008)
![What Doesn't Kill You](/__l5e/assets-v1/7cb5952e-b2c0-445f-9281-51fb2832bf6d/eb4d9ed77fc9.webp)
An underseen but critically acclaimed crime drama. Ruffalo and Ethan Hawke play small-time criminals trying to escape the tough streets of South Boston; their attempts to straighten out their lives don't go as expected.

## 12. Arco (2025)
![Arco](/__l5e/assets-v1/6ff81be6-c695-4abb-b305-1136618d6bbe/e0bbb0c00f29.webp)
The French animation tells the story of 10-year-old Arco, who travels back in time from the utopian world of 2932 to see dinosaurs. The child misses his target and lands in 2075. Ruffalo is in the English voice cast.

## 11. Mickey 17 (2025)
![Mickey 17](/__l5e/assets-v1/fac62ba2-5a21-4c9f-a050-b413d2a31f80/e609888ed199.webp)
In Bong Joon-ho's post-apocalyptic sci-fi comedy, Ruffalo plays Kenneth Marshall, the head of a mission to colonize an ice planet: an arrogant and comical villain, clearly referencing Trump.

## 10. Dark Waters (2019)
![Dark Waters](/__l5e/assets-v1/79191e30-c3f9-4329-ac5e-edf38c110c83/2431965d2b44.webp)
Todd Haynes' legal thriller based on true events. Ruffalo portrays environmental lawyer Robert Bilott, who takes on DuPont for chemical pollution in a years-long battle — he also produced the film.

## 9. Thor: Ragnarok (2017)
![Thor: Ragnarok](/__l5e/assets-v1/11d7f3c1-093f-4282-a57b-576c77e30952/697dde5d4dea.webp)
Taika Waititi's third Thor film completely shifts the series' tone to comedy. Ruffalo's Hulk here becomes a fully speaking, grumpy, and comical character for the first time.

## 8. Avengers: Endgame (2019)
![Avengers: Endgame](/__l5e/assets-v1/75150622-ece0-4303-ad41-2e8f7c1b1752/749cdf71280c.webp)
The epic finale of the MCU's first decade and, for a time, the highest-grossing film of all time. Ruffalo's "Professor Hulk" is the logical and surprisingly emotional culmination of the character's long journey.

## 7. Zodiac (2007)
![Zodiac](/__l5e/assets-v1/a20af508-d054-4814-91c2-94ca7e6e353b/a5345100c976.webp)
David Fincher's film turns his obsessive gaze to the Zodiac murders. Ruffalo plays detective Dave Toschi, who relentlessly pursues the case; one of the most stoic of his "man seeking justice" roles.

## 6. Foxcatcher (2014)
![Foxcatcher](/__l5e/assets-v1/47bae6b4-e0eb-4dbc-87ef-e4e6daae8608/a40ba325e4aa.webp)
The second of Ruffalo's two films related to the du Pont family. He was nominated for an Oscar for Best Supporting Actor for his role as Olympic champion wrestler Dave Schultz; his quiet compassion was as much discussed as his physical transformation.

## 5. You Can Count on Me (2000)
![You Can Count on Me](/__l5e/assets-v1/705e115b-fc20-43e6-a110-cdfc91ecf26b/3a74940e0c16.webp)
Ruffalo's breakout role came in Kenneth Lonergan's independent drama. As Terry, the wayward brother of lonely mother Sammy (played by Laura Linney), he showcases all the future veins of his acting here.

## 4. The Kids Are All Right (2010)
![The Kids Are All Right](/__l5e/assets-v1/e3e43aa3-bbad-404b-b6b4-6f293130c034/c96979583932.webp)
Lisa Cholodenko's film starring Annette Bening and Julianne Moore as a couple with two teenage children. The family balance is disrupted when the children seek out and find their biological father, Paul; Ruffalo received his first Oscar nomination for this role.

## 3. Poor Things (2023)
![Poor Things](/__l5e/assets-v1/949a1a81-4dd1-4df5-b18d-f17daad197b2/8f0048c37848.webp)
In Yorgos Lanthimos' Victorian-era comedy, Ruffalo plays the foppish lawyer Duncan Wedderburn, who abducts Bella Baxter (Emma Stone). His most exaggerated, most overtly comedic performance of his career — and another Oscar nomination.

## 2. Eternal Sunshine of the Spotless Mind (2004)
![Eternal Sunshine of the Spotless Mind](/__l5e/assets-v1/2b5b8bef-026a-48a1-9058-2c50218358c1/b18db8f93010.webp)
In Michel Gondry and Charlie Kaufman's memory-erasing story, Jim Carrey decides to erase all memories of Clementine (Kate Winslet). Ruffalo, as Stan, a technician at the clinic performing the procedure, carries the film's messy human side.

## 1. Spotlight (2015)
![Spotlight](/__l5e/assets-v1/252074f6-d159-4f13-8671-0653bb7409b7/a8a62a9b9e27.webp)
Ruffalo's greatest "justice-seeking" role. He plays investigative journalist Michael Rezendes, who, as part of the Boston Globe's Spotlight team, uncovers the Catholic Church's abuse cover-up. The film won the Best Picture Oscar, and Ruffalo was among the nominees again.`,
    image: "/__l5e/assets-v1/7cb5952e-b2c0-445f-9281-51fb2832bf6d/eb4d9ed77fc9.webp",
    source: "Metacritic",
  },
  {
    slug: "2026nin-en-iyi-yeni-korku-filmleri",
    title: "Top 10 New Horror Movies of 2026",
    excerpt: "Rotten Tomatoes ranked the year's highest-rated horror films by Tomatometer score. From a slasher parody to Nia DaCosta's '28 Years Later' sequel, the 10 best horror films of 2026.",
    body: `2026 was a fruitful year for horror cinema: camp slashers, digital legends, zombie sequels, and classic haunted house stories shared the same season. According to Rotten Tomatoes' Tomatometer rankings, here are the 10 best new horror movies of the year:

## 1. Teenage Sex and Death at Camp Miasma (2026) — %98
![Teenage Sex and Death at Camp Miasma](/__l5e/assets-v1/eebe0338-8465-4e8f-918a-f8c76c0ebb7e/57bbe5df91c4.jpg)
The film, directed by Jane Schoenbrun, follows a jaded slasher franchise being handed over to a young director (Hannah Einbinder). Critics describe the film as "a bloody love letter to the slasher genre." The cast also includes Gillian Anderson and Jasmin Savoy Brown.

## 2. Obsession (2025) — %94
![Obsession](/__l5e/assets-v1/361b868d-d71d-4f8b-9d31-8807b7c5c915/a1bab121c8c0.jpg)
Curry Barker's film begins with a romantic's wish to break the mysterious "One Wish Willow" and win his love coming true exactly as he wished. It's a rare production that manages to be as entertaining as it is disturbing.

## 3. Send Help (2026) — %92
![Send Help](/__l5e/assets-v1/ea20c74d-b01f-4ec4-a2af-3a2f8c5a0227/2f5e1f30913a.jpg)
Sam Raimi's film about two co-workers who survive a plane crash and are stranded on a deserted island. Rachel McAdams and Dylan O'Brien are a perfect fit for Raimi's devilish sense of humor.

## 4. Leviticus (2026) — %92
![Leviticus](/__l5e/assets-v1/3a157f6c-f63f-44f7-83ff-f4b6214e385f/978edc327881.jpg)
In Adrian Chiarella's film, two young people must escape a creature that takes the form of the person they most desire — each other. It combines an emotional love story with a clever monster concept.

## 5. 28 Years Later: The Bone Temple (2026) — %91
![28 Years Later: The Bone Temple](/__l5e/assets-v1/9f56e460-b823-4a50-8b4d-bec0c19fe5c6/13e2ac57fd9a.jpg)
Nia DaCosta takes over the world established by Danny Boyle and Alex Garland and turns it upside down. Ralph Fiennes and Jack O'Connell's performances deepen the film's horror.

## 6. Hokum (2026) — %90
![Hokum](/__l5e/assets-v1/4e462f13-13cf-4031-8d85-da58f2b3419e/dab8c4495a3b.jpg)
In Damian McCarthy's film, novelist Ohm Bauman (Adam Scott) becomes entangled in a witch legend at a desolate inn where he's gone to scatter his family's ashes. A classic haunted house story fueled by atmospheric folklore.

## 7. Backrooms (2026) — %87
![Backrooms](/__l5e/assets-v1/51852159-797a-48e7-9067-b20cb762cf48/8f297513098b.jpg)
Kane Parsons's debut feature film, bringing his YouTube-born liminal corridor legend to the big screen. Starring Chiwetel Ejiofor and Renate Reinsve, the production is as hypnotic as it is terrifying.

## 8. We Bury the Dead (2024) — %87
![We Bury the Dead](/__l5e/assets-v1/b1092187-4490-40ba-9e99-b5f3db729ecb/4b4150ed1943.jpg)
The film, starring Daisy Ridley, turns zombie tropes into a meditation on grief and loss. After a military disaster, the dead don't just rise, they hunt.

## 9. Primate (2025) — %77
![Primate](/__l5e/assets-v1/1f0e26e8-fe19-43dc-a316-7790c6498083/ba05adef402c.jpg)
Johannes Roberts's film, released at the beginning of the year, turns a tropical vacation into a primal survival nightmare. Short, lean, and effective.

## 10. Ready or Not 2: Here I Come (2026) — %75
![Ready or Not 2](/__l5e/assets-v1/b8d26bf9-a9c9-4835-9a84-40fd36cd0116/37bd82ed47ee.jpg)
Grace (Samara Weaving) immediately levels up after escaping the Le Domas family. The sequel largely breaks the curse of sequels thanks to Weaving's wild energy.`,
    image: "/__l5e/assets-v1/eebe0338-8465-4e8f-918a-f8c76c0ebb7e/57bbe5df91c4.jpg",
    source: "Rotten Tomatoes",
    countdownBadge: "10 → 1 countdown",
  },
  {
    slug: "2026nin-en-iyi-yeni-komedi-filmleri",
    title: "Top 10 New Comedy Movies of 2026",
    excerpt: "From Olivia Wilde's 'The Invite' to Pixar's 'Hoppers', the 10 funniest films of the year according to Rotten Tomatoes' Tomatometer rankings.",
    body: `From Boots Riley to Olivia Wilde, from Pixar to Minions: 2026 comedy cinema is a year where both auteur cinema and big studio animations are strong at the same time. The 10 best new comedies of the year, according to Rotten Tomatoes' Tomatometer rankings:

## 1. The Invite (2026) — %97
![The Invite](/__l5e/assets-v1/f3c21a03-1544-4142-9c27-d19243bb53f7/2eacf819ef58.jpg)
In the film directed by Olivia Wilde, Joe and Angela, whose marriage is falling apart, invite their mysterious upstairs neighbors to dinner. With a cast including Seth Rogen, Penélope Cruz, and Edward Norton, it's the year's most sophisticated farce.

## 2. The Sheep Detectives (2026) — %95
![The Sheep Detectives](/__l5e/assets-v1/df744ded-659b-46e3-89da-89b07c2caa15/a47b73279c60.jpg)
Hugh Jackman plays a shepherd who reads detective novels to his sheep every night. The film, also starring Emma Thompson and Nicholas Braun, wraps surprising depth of themes into a warm family entertainment package.

## 3. Hoppers (2026) — %94
![Hoppers](/__l5e/assets-v1/65df64b1-fb15-4ce7-942c-a3018c9358e6/9270a83231fc.jpg)
Pixar's new film is based on a sci-fi idea that makes it possible to talk to animals. According to critics, it's the studio's funniest work to date.

## 4. Toy Story 5 (2026) — %92
![Toy Story 5](/__l5e/assets-v1/272b5515-53d7-4935-be21-e9002c3b4537/25353ed7da60.jpg)
This time, toys are competing with screens. The return of Woody and Buzz reminds us that children still need these characters despite franchise fatigue.

## 5. I Love Boosters (2026) — %92
![I Love Boosters](/__l5e/assets-v1/84913933-55b1-41c3-8ebf-f3a460d1cabb/19903ba1cc72.jpg)
Boots Riley's new film, starring Keke Palmer, Naomi Ackie, and Taylour Paige, once again combines the director's sharp social satire with chaotic humor.

## 6. I Want Your Sex (2026) — %90
![I Want Your Sex](/__l5e/assets-v1/28e7c32b-c12b-4317-879f-7aa7fe2209e3/6911022747f9.jpg)
One of Gregg Araki's most accessible works. Elliot, played by Cooper Hoffman, finds his fantasies becoming reality when he gets a job working for provocative artist Erika Tracy (Olivia Wilde).

## 7. Minions & Monsters (2026) — %89
![Minions & Monsters](/__l5e/assets-v1/3f906c9b-1f22-47f9-8eb7-266751a88e4b/0f0688aa3ee1.jpg)
Minions conquer Hollywood history this time: they become stars, lose everything, and unleash monsters upon the world. The most enjoyable installment of the series.

## 8. Power Ballad (2026) — %88
![Power Ballad](/__l5e/assets-v1/a5d29a70-3ee8-4021-8574-b21c12a5d696/eea1d3fd971b.jpg)
In John Carney's film, wedding singer Rick (Paul Rudd), longing for his old days, meets fading boyband star Danny (Nick Jonas). It tells the allure and cost of fame with quiet grace.

## 9. GOAT (2026) — %82
![GOAT](/__l5e/assets-v1/60f4d837-a93e-4392-a70d-7ebdb318492b/522421cb2e82.jpg)
An action-comedy set in Sony Pictures Animation's all-animal world. The voice cast, including Steph Curry and Gabrielle Union, gets the job done.

## 10. Cold Storage (2026) — %81
![Cold Storage](/__l5e/assets-v1/be80a1fc-1a5d-4b7d-90a2-d6d762a03ab3/04595477da0f.jpg)
The film starring Joe Keery and Georgina Campbell is a B-movie homage set in a storage facility built on an old military base. It's a sticky and witty sci-fi with a Liam Neeson-esque cast.`,
    image: "/__l5e/assets-v1/f3c21a03-1544-4142-9c27-d19243bb53f7/2eacf819ef58.jpg",
    source: "Rotten Tomatoes",
  },
  {
    slug: "tum-9-live-action-spider-man-filmi-siralamasi",
    countdownBadge: "9 → 1 countdown",
    title: "All 9 Live-Action Spider-Man Movies: Ranked From Worst to Best",
    excerpt: "Nerdist ranked nearly 25 years of Spider-Man cinema from top to bottom: from the Raimi trilogy to the Amazing duo, the Tom Holland era, and the blockbuster Brand New Day.",
    body: `For nearly 25 years, the *Spider-Man* franchise has been one of the most successful brands in cinematic history. While the ninth installment, *Spider-Man: Brand New Day*, broke box office records worldwide, the series has accumulated both very high peaks and quite low troughs. Nerdist ranked the nine live-action films from worst to best, not counting the MCU films where Spidey made guest appearances.

## 9. The Amazing Spider-Man 2 (2014) — Marc Webb
![The Amazing Spider-Man 2](/__l5e/assets-v1/be9db875-255f-456e-a895-426757582d18/0a2dc303ac05.webp)
A textbook example of a studio drawing the wrong lessons from the MCU: an eagerness to build a universe before character, story, and logic. Jamie Foxx's Electro is almost straight out of Joel Schumacher's 90s Batman; a tone diametrically opposed to Andrew Garfield's performance. It represents the bottom, except for giving us the best Spider-Man suit in the series.

## 8. Spider-Man 3 (2007) — Sam Raimi
![Spider-Man 3](/__l5e/assets-v1/cb8aacfa-1651-42bb-b7a7-b358ebd0d7d5/eb0c0aa2f454.webp)
Raimi was pressured by the studio to include Venom, whom he disliked; with two villains already, a third completely upset the balance. Thomas Haden Church's Sandman, especially his "birth" scene, is magnificent; the amnesia subplot and screaming MJ are tiresome. A messy but never boring, watchable chaos.

## 7. The Amazing Spider-Man (2012) — Marc Webb
![The Amazing Spider-Man](/__l5e/assets-v1/023995bb-cd25-4364-99ae-ab3b90560512/253ad99d5cc2.webp)
A reboot that came just five years after the Raimi trilogy, essentially made to cut costs. Garfield's casting was right, but the film couldn't go beyond "not bad." The more realistic approach stripped the series of its charm; on top of that, it had the worst suit in the series.

## 6. Spider-Man: Far From Home (2019) — Jon Watts
![Spider-Man: Far From Home](/__l5e/assets-v1/ef1db7d1-4bee-4975-9a4d-9c8db6884b77/a58f60149ffc.webp)
A good example of the MCU at its peak: the European trip opens up plenty of lighthearted space for Peter, Ned, and the Midtown crew. Tom Holland and Zendaya's chemistry is convincing, Jake Gyllenhaal's Mysterio is a villain who causes real damage to Peter's life. The hologram nightmare sequence is one of the MCU's best visual moments.

## 5. Spider-Man: No Way Home (2021) — Jon Watts
![Spider-Man: No Way Home](/__l5e/assets-v1/6020b1f9-9beb-4561-a0fb-34f9e0808b8e/e37ec691d910.webp)
A film that should have collapsed on paper: resolving the identity cliffhanger, teaming up with Doctor Strange, bringing back two old Spider-Men and their villains. Yet it works, because it's not just about nostalgia; we genuinely care about all three Peter Parkers. Holland's Peter finally steps out of Tony Stark's shadow.

## 4. Spider-Man (2002) — Sam Raimi
![Spider-Man (2002)](/__l5e/assets-v1/23041930-1a3f-404c-8208-284d6cb86756/efab32e4e70e.webp)
A nearly flawless origin story. Tobey Maguire is brilliant casting; David Koepp's script condenses years of Silver Age comics into a single film and never feels rushed. Willem Dafoe's Norman Osborn and J.K. Simmons' J. Jonah Jameson are iconic. Downsides: a superficial MJ and that terrible Goblin suit.
![Tobey Maguire — Spider-Man (2002)](/__l5e/assets-v1/7ef21f3a-0ec6-4286-a98a-c99543219cfc/0269c0aab256.webp)

## 3. Spider-Man: Homecoming (2017) — Jon Watts
![Spider-Man: Homecoming](/__l5e/assets-v1/ec16ad67-546c-419d-bf3b-b3e9e008545e/05127d21ee3a.webp)
Fifteen years later, a Spidey who finally looks genuinely high school-aged. Skipping the spider bite after two origin films was a smart decision. This version, close to Bendis's *Ultimate Spider-Man* comics, also brings one of the MCU's best villains in Michael Keaton's Vulture.
![Spider-Man: Homecoming — Peter Parker](/__l5e/assets-v1/c985e0db-c3cc-4a7f-8623-c83a9efa00eb/213c3727b497.jpg)

## 2. Spider-Man: Brand New Day (2026) — Destin Daniel Cretton
![Spider-Man: Brand New Day](/__l5e/assets-v1/9fb8e69d-87c6-4722-9e4d-479e0f958ed4/a608ab03f035.webp)
The ninth film in the series exploded both at the box office and with critics. Cretton tells a more street-level and emotional Spider-Man story, building Holland's Peter from the ground up; the costume design is also the best in the series.
![Spider-Man: Brand New Day](/__l5e/assets-v1/340be605-533e-4d18-a46e-cbca408ae9e3/b9c0b4fbec32.webp)

## 1. Spider-Man 2 (2004) — Sam Raimi
![Spider-Man 2](/__l5e/assets-v1/b5de47ff-47d8-4ee0-bb4c-fc93c44f3306/c9e89900a912.webp)
No surprises at the top. Raimi's second film is still not only the best Spider-Man movie but also one of the best superhero films of all time. Alfred Molina's Doc Ock is tragic and terrifying, the train scene is one of the genre's benchmark scenes, and the tension between heroism and personal sacrifice is the real force holding the film together.
![Spider-Man 2 — pizza sahnesi](/__l5e/assets-v1/a62957eb-bfa9-4284-8e13-f1cdb1ebca2b/45c16c20686e.jpg)`,
    image: "/__l5e/assets-v1/b5de47ff-47d8-4ee0-bb4c-fc93c44f3306/c9e89900a912.webp",
    source: "Nerdist",
  },
  {
    slug: "mcu-oncesi-izlenmesi-gereken-3-x-men-filmi",
    title: "3 Great X-Men Movies You Need To Watch Before Mutants Arrive In The MCU",
    excerpt: "As the mutants' MCU journey accelerates with Samara Weaving cast as Emma Frost, the Empire team picks the three best stops to revisit the series: X2, Days Of Future Past, and Logan.",
    body: `We've known for a while that the Marvel Cinematic Universe is getting closer to mutants. With *X-Men '97* an X-Men narrative is already underway under the MCU umbrella; on top of that came the news of Samara Weaving being cast for the role of telepath Emma Frost. So there's no better time to look back at the series that started the genre. But not all X-films were created equal — Empire's experts picked the three most worth rewatching.

## X2 (2003) — Bryan Singer
![X2](/__l5e/assets-v1/af368ed6-e055-40c1-beff-62db847a2984/12a4791602ce.avif)
**Duration:** 2h 15m · **Platform:** Disney+ · **Cast:** Patrick Stewart, Hugh Jackman, Ian McKellen, Halle Berry, Famke Janssen, James Marsden

The first *X-Men* is a good film in its own right, but the leap made by the second installment is undeniable. The action is bigger, the scale is wider, and the film delves much deeper into its characters: Wolverine unearths his past shrouded by the 'Weapon X' project, Jean Grey's telekinetic powers whisper of impending doom. From the opening infiltration of the White House (hello Nightcrawler!) to the attack on the X-Mansion, to the Lady Deathstrike showdown at Alkali Lake, it's a classic comic book movie through and through. On top of that, there's Brian Cox's William Stryker and the operatic chess game between Professor X and Magneto. Cinematic checkmate.

&nbsp;

## X-Men: Days Of Future Past (2014) — Bryan Singer
![X-Men: Days Of Future Past](/__l5e/assets-v1/efa14035-7198-40ae-991f-16ae36ffc882/648e0b002144.avif)
**Duration:** 2h 13m · **Platform:** Disney+ · **Cast:** Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence, Halle Berry, Nicholas Hoult

Long before the MCU started playing with multiverses, two generations of mutants came together in a massive time-travel story. Loosely adapted from Chris Claremont and John Byrne's two-part comic book arc, the film sends the adamantium-clawed Canadian back to 1973 to prevent Mystique from assassinating a senator — and robot apocalypse. From the brutal opening Sentinel fight to the slow-motion Quicksilver prison break, the series has everything a fan could want. As much as Logan's 1973 bewilderment ("someone gave you some really bad acid"), it doesn't shy away from clawing at the known intricate political landscapes of the X-Men.

&nbsp;

## Logan (2017) — James Mangold
![Logan](/__l5e/assets-v1/af368ed6-e055-40c1-beff-62db847a2984/12a4791602ce.avif)
**Duration:** 2h 20m · **Platform:** Disney+ · **Cast:** Hugh Jackman, Patrick Stewart, Dafne Keen, Stephen Merchant

Hugh Jackman technically returned with *Deadpool & Wolverine*, but James Mangold's melancholic masterpiece *Logan* still offers a perfect finale to one of cinema's most defining comic book characters: a *Shane*-esque Western farewell. X-Men for adults; it doesn't shy away from profanity, extreme violence, and intense emotion. Charles Xavier, whose Alzheimer's combines with his telepathic powers turning him into a weapon of mass destruction, Logan, who finally accepts that mortality has caught up with him, and Dafne Keen's savage performance as 'X-23' open up a new vein for the series even twenty years later. In a word: X-traordinary.

&nbsp;`,
    image: "/__l5e/assets-v1/88a22799-7f90-4ed3-9e8b-290c67f0080d/f431798f6130.avif",
    source: "Empire",
  },
  {
    slug: "brand-new-day-oncesi-3-spider-man-disi-tom-holland-filmi",
    title: "3 Non-Spider-Man Tom Holland Movies to Watch Before Brand New Day",
    excerpt: "Tom Holland, the MCU's sole Spider-Man for a decade, is an actor far beyond the web-slinger. The Empire team picked his top three non-Spidey films.",
    body: `His name is Tom Holland, and for the past decade, he's been the Marvel Cinematic Universe's sole Spider-Man — soon to return with *Spider-Man: Brand New Day*. But while the world knows him best as the friendly neighborhood superhero, there's much more to the British star than Peter Parker. While we continue to admire his work in *The Odyssey*, Empire's experts dug through the archives to pick his top three non-Spidey films.

## The Impossible (2012) — J.A. Bayona
![The Impossible](/__l5e/assets-v1/18b55c5e-99f6-4183-b856-d3cb8a0d15c4/4bece403b6be.avif)
**Runtime:** 1h 54m · **Cast:** Ewan McGregor, Naomi Watts, Tom Holland

A younger Tom Holland, closer to his *Billy Elliot* days, stars in the true story of a British family caught in the Boxing Day tsunami that hit Thailand in 2004. In Bayona's hands, the film is both breathtaking and exhaustingly harrowing: the physical horror of the disaster and a family's struggle to find each other coexist in the same scene. Holland's maturity here is the first evidence of the dramatic weight he would carry years later.

## The Lost City Of Z (2016) — James Gray
![The Lost City Of Z](/__l5e/assets-v1/fe639fdd-2cd3-4b14-a4da-8c1a6adf36b7/1aeb7ceb512a.avif)
**Cast:** Charlie Hunnam, Robert Pattinson, Sienna Miller, Tom Holland

The story of explorer Percy Fawcett, who pursues a lost civilization in the Amazon; Holland plays his son, who views his father's obsession with deep resentment, then slowly begins to see the world through his eyes. It's an old-fashioned epic of a kind rarely made anymore, capturing the beauty of discovery as much as the disease, starvation, and brutal climate. The duo of Hunnam and Holland is convincing; it's also the first film where Holland and Robert Pattinson are in the same frame.

## The Devil All The Time (2020) — Antonio Campos
![The Devil All The Time](/__l5e/assets-v1/a018db1b-f3c4-490b-ba9b-522f96f71df6/f3adcb3d62be.avif)
**Runtime:** 2h 18m · **Platform:** Netflix · **Cast:** Bill Skarsgård, Robert Pattinson, Tom Holland, Sebastian Stan, Riley Keough, Jason Clarke

Despite opening with a disaster movie, starring in half a dozen MCU films, and flexing his dramatic muscles in a James Gray film, it was Campos's pitch-black Southern Gothic gem that shattered the audience's perception of "forever young" Tom Holland. In Holland's Arvin Russell, violence, intensity, and pervasive darkness coexist: a young man willing to do the unspeakable to avenge the unspeakable in a lawless town at the mercy of false faith leaders and serial killers. On top of that, there's a wildly unhinged Robert Pattinson as a predatory preacher.`,
    image: "/__l5e/assets-v1/8ead4289-bf4d-4794-b90f-101722ad7f3a/c88a28918d19.avif",
    source: "Empire",
  },
  {
    slug: "tum-zamanlarin-en-iyi-zombi-filmleri",
    title: "The Best Zombie Movies Of All Time: Empire's Top 10",
    excerpt: "From Night Of The Living Dead to 28 Years Later, the top 10 films from Empire's 25-strong zombie list — the best of the genre, from Romero classics to Train To Busan.",
    countdownBadge: "10 → 1 countdown",
    body: `The zombie film is one of cinema's most flexible genres: the same monster can be used for social satire, pure comedy, and pure horror. Empire has compiled a list of 25, ranging from *Night Of The Living Dead* to *28 Years Later*. Here are the top 10 films from that list.

## 10. Re-Animator (1985) — Stuart Gordon
![Re-Animator](/__l5e/assets-v1/290a74c4-1721-44a4-a770-de9061acbd1f/2c42985d6e5c.avif)
Adapted from an H.P. Lovecraft story, the film looks at the dead from a completely different angle: Jeffrey Combs' mad professor Herbert West invents a lime-green fluid that reanimates dead tissue, and soon begins applying it to corpses. A pulp-level mix of horror and comedy; even by the gory standards of the 80s, it's excessively bloody, with a tight script that makes it nauseatingly entertaining.

## 9. 28 Years Later (2025) — Danny Boyle
![28 Years Later](/__l5e/assets-v1/4265c7e5-5c4a-49a1-8afc-307940e549a5/7f11841c52a6.avif)
Boyle and Alex Garland's return to the pandemic they started is not the expected nostalgia trip: it's a story of violence, faith, and grief through the eyes of a child growing up on a quarantined island. With its visual audacity and final move, it's the most debated installment in the series.

## 8. [REC] (2007) — Jaume Balagueró, Paco Plaza
![REC](/__l5e/assets-v1/3e23697b-318e-4706-a9d1-8a563e43be05/941e53d15ab6.avif)
The most prolific example of found-footage horror: a quarantined apartment building in Barcelona, a single camera, and increasingly narrowing corridors. The attic sequence at the end is one of the most copied horror moments in the genre.

## 7. Braindead (1992) — Peter Jackson
![Braindead](/__l5e/assets-v1/e33abd64-309c-48e5-ba5d-a05f2a0a5d5a/a0eb49fe5f88.avif)
Peter Jackson before Middle-earth: one of the goriest films in cinema history, with a lawnmower to boot. A happy madness that pushes splatter comedy to the limits of absurdity.

## 6. Night Of The Living Dead (1968) — George A. Romero
![Night Of The Living Dead](/__l5e/assets-v1/86ba50b1-b09f-461a-8cf9-39362ea03c64/d6b42944dbad.avif)
The film that invented the genre. Black-and-white, low-budget, and still brutal; it turns a besieged farmhouse into a laboratory for the racial and authority tensions of 60s America. Its ending is one of cinema's coldest final scenes.

## 5. Train To Busan (2016) — Yeon Sang-ho
![Train To Busan](/__l5e/assets-v1/c0569d98-5073-4bec-b7f7-d01705285212/fd54dee5d475.avif)
A perfectly crafted thriller as a pandemic film set on a high-speed train; but its real power lies in the time it spends on its characters. A modern classic that brings class criticism and fatherhood melodrama into the same carriage, leaving the audience devastated at the end.

## 4. Shaun Of The Dead (2004) — Edgar Wright
![Shaun Of The Dead](/__l5e/assets-v1/c7ab4a84-df4f-49b3-842d-dc42cbf3e3d8/07dc0ed05145.avif)
The benchmark for zombie comedy: a sharp British provincial satire as much as a love letter to Romero. Wright's editing rhythm, the record-throwing scene, and the "let's meet at the Winchester when all this blows over" idea permanently changed the genre.

## 3. 28 Days Later (2002) — Danny Boyle
![28 Days Later](/__l5e/assets-v1/b0c15ae5-f2b7-4a93-b4fc-6697c745cb00/75db7b9f8110.avif)
Opening with empty London scenes, the film, which turned the grit of digital video into an aesthetic, brought running zombies into the mainstream. But the real horror comes not from the pandemic, but from the survivors — especially the people at the military base.

## 2. Day Of The Dead (1985) — George A. Romero
![Day Of The Dead](/__l5e/assets-v1/5f308f2e-18a3-4845-8ad0-c78e7aed27ab/8311f6fd1fa1.avif)
Romero's most pessimistic and radical film: in an underground bunker, science and the military devour each other, while a zombie named Bub becomes the most human character in the film. Tom Savini's makeup work is still legendary.

## 1. Dawn Of The Dead (1978) — George A. Romero
![Dawn Of The Dead](/__l5e/assets-v1/84233674-bedb-40c3-bd58-edfe172ed017/cb5f9cbaf90f.avif)
At the top is the tombstone of consumer society: survivors taking refuge in a shopping mall discover that the place they thought was heaven is their own trap. Both genre cinema and sharp satire; the film that turned the zombie movie into a metaphor machine.`,
    image: "/__l5e/assets-v1/a476ef2f-dcb2-46d9-b2fd-b1f25ff5d8cd/905c449f6930.avif",
    source: "Empire",
  },
  {
    slug: "2026-nin-en-iyi-10-oyunu",
    title: "The 10 Best Games of 2026 (So Far)",
    excerpt: "From \"Cairn\" to \"007 First Light\", from \"Resident Evil Requiem\" to \"Saros\": Empire's top 10 games of the first half of the year. 2026 is shaping up to be the year where cinema and gaming intersect the most.",
    countdownBadge: "10 → 1 countdown",
    body: `Will 2026 be the year of cinema in the gaming world? We're only halfway through the year, but James Bond has embarked on an entirely new adventure for the first time in years — "007 First Light" tells the story of how the world's most famous agent was born. "Resident Evil Requiem" offers a horror worthy of the silver screen, and even "Lego Batman" is reborn with a Tim Burton aesthetic. Other contenders draw inspiration from John Hughes' filmography or the AI paranoia of "2001".

Alongside these, "classically minded" games are also on stage: Metroidvanias, bullet-hell roguelikes, and of course, "Pokémon". Here's Empire's ranking.

## 10. MIO: Memories In Orbit
![MIO: Memories In Orbit](/__l5e/assets-v1/7fc70a6a-3559-4b88-a68e-079ee72277bf/736b1885c566.avif)
No one outside of Metroidvania obsessives expected so much from "MIO"; the game turned out to be the most immersive action platformer in years. As the titular robot, you awaken in a colossal, decaying structure known only as "The Ship" and are left to explore. What emerges is a last-ditch gamble for survival and a story that is profoundly human despite the absence of a single human. With watercolor visuals painted over 3D models, sharp combat, and challenging bosses, it's the new benchmark for the genre.

## 9. Lego Batman: Legacy Of The Dark Knight
![Lego Batman: Legacy Of The Dark Knight](/__l5e/assets-v1/c5cb1da0-b555-4d1f-b826-d9e5fcb05b2a/d7ba4c525eaf.avif)
When does a Lego game stop being a Lego game? When it's secretly the best Batman game since the golden days of the "Arkham" series. TT Games opts for a well-told story, a tight cast, and real mechanics instead of thousands of unlockables and hundreds of character piles. The combat has nuance, abilities unlock with RPG logic, and cruising through Gotham's surprisingly detailed streets in the Batmobile is pure joy.

## 8. Pokémon Pokopia
![Pokémon Pokopia](/__l5e/assets-v1/3a2bca2b-525a-4315-b43b-4698d0ed881b/255a1fbcc2f3.avif)
Take the life simulation of "Animal Crossing", mix it with the rebuildable worlds of "Minecraft", and cast it in the mold of "Pokémon". The result: a charming sandbox game where you, as everyone's favorite purple blob Ditto, rebuild a planet humanity was forced to abandon. Exploring, bringing hundreds of abandoned Pokémon back into society, and shaping all the biomes by yourself keeps you coming back for days. Its only flaw: it will steal your life.

## 7. Pragmata
![Pragmata](/__l5e/assets-v1/63a1be92-ceda-4fe3-b538-55b4f20d3d97/ebc59ab5527b.avif)
Both a sci-fi epic set on a moon base overrun by a rogue AI, and a touching story between the gruff space mechanic Hugh and his adopted robot daughter Diana. Capcom's true genius lies in the combat: the world's first first-person shooter–real-time puzzle hybrid. While Hugh shoots, you simultaneously hack enemies with Diana using a panel-flipping puzzle, creating openings. It's unlike anything else, and surprisingly thought-provoking on artificial intelligence.

## 6. Cairn
![Cairn](/__l5e/assets-v1/e314c589-662d-4ead-baa8-3a6f261621b2/81e68a7a3c33.avif)
If "127 Hours" or "Touching the Void" deterred you from even looking at a rock face, "Cairn" might convince you what you've been missing. As Aava, you attempt to conquer the 9,000-meter Mount Kami, charting your own route by individually controlling Aava's limbs. The Game Bakers meticulously balances the technical skill of climbing with the management of hunger, thirst, and fatigue. Tense and demanding yet strangely zen; unique with its cel-shaded aesthetic.

## 5. Mixtape
![Mixtape](/__l5e/assets-v1/06912954-1626-42c9-aa3c-2daafae0c0e9/e66cec6de6a5.avif)
Beethoven & Dinosaur's elegy to music, 90s youth, and a beautifully wasted adolescence was much debated: some called it "not a game," others found it too linear. They're not wrong — but it's unforgettable. As music-obsessed Stacey Rockford, you live out the last days with her two closest friends before high school ends. The magic is right here: emotions, memories, regrets, and a carefully chosen song for every moment. A playable John Hughes movie.

## 4. 007 First Light
![007 First Light](/__l5e/assets-v1/d24119ec-98e0-497e-9cbd-171fdc92c458/7ad885158bbf.avif)
While waiting for a new cinematic Bond, IO Interactive admirably fills the void. Inspired by Ian Fleming's stories, it's a "Bond Begins" tale chronicling 26-year-old James' (Patrick Gibson) recruitment into MI6, his training, and how he earned that iconic 00 code. First encounters with Moneypenny, Q, and M, the flawless shooting–driving–stealth balance expected from the "Hitman" creators, and an opening song by Lana Del Rey.

## 3. Forza Horizon 6
![Forza Horizon 6](/__l5e/assets-v1/d8a8ab8a-92da-4820-b0f5-7f27f3ed41cc/1839d35db8b9.avif)
"Forza Horizon" has long been a racing game even for those who don't love racing games. The sixth installment is set in Japan this time: Tokyo's streets, rural tranquility, and natural wonders side by side. It approaches Japanese car culture with respect — references to "Tokyo Drift" and "Initial D" are plentiful. With over 500 detailed vehicles and hundreds of races, it's the pinnacle of the genre for motor enthusiasts, and for others, the meditative joy of aimlessly wandering this vast world.

## 2. Saros
![Saros](/__l5e/assets-v1/c90e6528-1c88-4254-870c-146beeefc3d8/6aa90a546d03.avif)
Not technically a sequel to Housemarque's "Returnal" but clearly in its image: time loop and roguelike mechanics are retained, the rest is improved in almost every aspect. As corporate space marine Arjun Devraj (Rahul Kohli), you investigate missing "colonists" on Carcosa, dying and mysteriously resurrecting each time. Getting stronger and progressing a little further with each attempt creates an addictive trial-and-error loop. What sets it apart from its predecessor is its polish: combat with flawless precision.

## 1. Resident Evil Requiem
![Resident Evil Requiem](/__l5e/assets-v1/a9279cad-c577-4d9c-926e-ba186320114f/c40d2d0eb487.avif)
A banner year for Capcom. Despite "Pragmata" and "Monster Hunter Stories 3," nothing can dethrone "Resident Evil Requiem." A dual-pronged horror story split between returning action hero Leon S. Kennedy and newcomer Grace Ashcroft: Grace investigates a chain of deaths starting at the hotel where her mother was murdered years ago, while Leon hunts Umbrella creatures. You're encouraged to play Leon in third-person and Grace in first-person; in either case, the series hasn't been this terrifying in years. With its at times photorealistic visuals, it makes you fear every corner — and it's the best game of the year so far.`,
    image: "/__l5e/assets-v1/6820d01e-c52d-41cd-8296-43f90543e611/f510feeb2ff2.avif",
    source: "Empire",
  },
  {
    slug: "ridley-scott-movies-ranked-worst-to-best",
    title: "Every Ridley Scott Movie, Ranked From Worst to Best",
    excerpt: "From biblical misfires to science-fiction landmarks, Rolling Stone ranks 29 Ridley Scott films — with Alien, Blade Runner and Thelma & Louise leading a remarkably varied career.",
    countdownBadge: "29 films ranked",
    image: ridleyScottCover.url,
    source: "Rolling Stone",
    body: `Few filmmakers have moved as freely between genres as Ridley Scott. Across five decades, he has made science-fiction landmarks, historical epics, crime thrillers, war films, horror pictures and intimate character studies — often with an instantly recognizable command of scale and atmosphere.

Rolling Stone critics A.A. Dowd, David Fear, Tim Grierson and Emily Zemler ranked 29 of Scott's features from the least successful to the essential. The result captures both sides of an unusually restless career: the visual craftsman capable of transforming almost any world into spectacle, and the prolific director whose experiments do not always land.

## 29. Exodus: Gods and Kings (2014)

An enormous biblical production whose committed cast and monumental imagery cannot overcome blunt dialogue and an emotionally remote retelling of Moses.

## 28. Robin Hood (2010)

Russell Crowe's grim origin story drains much of the adventure from the familiar legend, replacing swashbuckling fun with muddy political intrigue.

## 27. 1492: Conquest of Paradise (1992)

A lavish but dramatically disconnected historical epic, remembered as much for Vangelis' score as for its troubled portrait of Christopher Columbus.

## 26. Legend (1985)

Scott's fantasy world remains beautiful to look at, but its fairy-tale narrative never becomes as vivid as Tim Curry's extraordinary Lord of Darkness.

## 25. Someone to Watch Over Me (1987)

A polished romantic thriller that shows Scott's neo-noir instincts, even when its central relationship and class tensions feel underdeveloped.

## 24. Body of Lies (2008)

Leonardo DiCaprio and Russell Crowe anchor a muscular espionage thriller whose familiar politics keep it below Scott's strongest modern work.

## 23. White Squall (1996)

This seafaring coming-of-age drama has impressive storm sequences and earnest performances, though its lessons in masculinity arrive heavily underlined.

## 22. Kingdom of Heaven (2005)

The theatrical cut was compromised, while the director's cut reveals a richer Crusades epic built around faith, political power and fragile coexistence.

## 21. A Good Year (2006)

Scott and Crowe trade battlefields for Provence in a lightweight romantic comedy whose scenery is more persuasive than its transformation story.

## 20. Hannibal (2001)

An operatic, gruesome sequel that lacks The Silence of the Lambs' psychological precision but embraces decadent horror with unmistakable style.

## 19. Black Rain (1989)

Michael Douglas enters an Osaka underworld in a slick crime thriller powered by nocturnal imagery, industrial surfaces and hard-boiled momentum.

## 18. House of Gucci (2021)

Part family tragedy and part camp pageant, the fashion-house saga is wildly uneven but rarely dull, with Lady Gaga committing fully to its excesses.

## 17. All the Money in the World (2017)

A tense kidnapping drama sharpened by Christopher Plummer's late-arriving performance as oil magnate J. Paul Getty.

## 16. Napoleon (2023)

Joaquin Phoenix's emperor is rendered as warrior, lover and insecure spectacle inside a film whose battle scenes often outshine its compressed biography.

## 15. Matchstick Men (2003)

Nicolas Cage gives one of his most controlled performances in Scott's nimble con-artist story about fraud, fatherhood and the possibility of change.

## 14. Alien: Covenant (2017)

The prequel combines brutal creature horror with Michael Fassbender's eerie dual performance and Scott's increasingly bleak questions about creation.

## 13. The Last Duel (2021)

A medieval assault is revisited through conflicting perspectives in a formally ambitious drama featuring a fierce performance from Jodie Comer.

## 12. Prometheus (2012)

Scott returns to cosmic horror with grand ideas about faith and origins; the mysteries can frustrate, but the images and sense of dread linger.

## 11. G.I. Jane (1997)

Demi Moore's intensity drives a tough, direct military drama about institutional resistance and the physical cost of proving oneself.

## 10. Gladiator II (2024)

![Paul Mescal and Pedro Pascal in Gladiator II](${ridleyGladiator.url})

Scott revisits Rome with fresh stars and unapologetically oversized action, creating a sequel energized by political intrigue and arena spectacle.

## 9. Black Hawk Down (2001)

An immersive, punishing account of urban warfare whose technical command captures the confusion and terror of soldiers trapped inside a collapsing mission.

## 8. American Gangster (2007)

Denzel Washington and Russell Crowe occupy opposite sides of a sprawling crime saga that patiently maps power, corruption and discipline.

## 7. The Counselor (2013)

Once dismissed, Scott and Cormac McCarthy's nihilistic thriller has grown into a cult object: severe, strange and merciless about consequence.

## 6. The Duellists (1977)

Scott's debut turns a decades-long feud into painterly cinema, already displaying the visual rigor that would define his career.

## 5. The Martian (2015)

Matt Damon's stranded astronaut survives through science, wit and cooperation in Scott's rare crowd-pleaser built on optimism rather than doom.

## 4. Gladiator (2000)

Russell Crowe's Maximus gave Scott a modern sword-and-sandal classic: emotionally direct, technically imposing and endlessly quotable.

## 3. Thelma & Louise (1991)

Two women take the road away from lives that have constrained them, and Scott turns their flight into a funny, furious and finally mythic act of freedom.

## 2. Blade Runner (1982)

![Harrison Ford on the set of Blade Runner](${ridleyBladeRunner.url})

Its rain-soaked future changed science fiction forever. Beneath the production design lies a melancholy investigation of memory, mortality and what makes a life human.

## 1. Alien (1979)

![Harry Dean Stanton in Alien](${ridleyAlien.url})

Scott's haunted-house movie in space remains a model of patient terror. Industrial design, class tension and the xenomorph converge in a horror film that still feels dangerous.`,
  },
  {
    slug: "na-hong-jin-movies-to-watch-before-hope",
    title: "3 Na Hong-jin Movies You Need to Watch Next as Hope Hits Cinemas",
    excerpt: "As the most expensive South Korean film ever made stomps into cinemas, we walk through Director Na's filmography — three modern classics of Korean thriller and horror, and where to stream them.",
    countdownBadge: "3 films",
    image: nhjCover.url,
    source: "Empire",
    body: `While the week's biggest headlines belong elsewhere, there is another wildly entertaining, kind of unwieldy, ridiculously ambitious near-three-hour sci-fi blockbuster demanding attention right now: Na Hong-jin's gonzo creature feature "Hope."

Reported as the most expensive South Korean movie ever made, Director Na's latest sees two police officers in a small town near the demilitarised zone between North and South Korea come under attack from a mysterious creature — an experience that demands the biggest screen possible.

As "Hope" stomps into multiplexes, here is a guided tour of Director Na's filmography to date: the three Na Hong-jin films you need to see next, and where to stream them.

## The Chaser (2008)

![The Chaser](${nhjChaser.url})

**Runtime:** 2hrs 5m | **Streaming on:** Prime Video, Arrow Video, Shudder

**Starring:** Kim Yun-seok, Ha Jung-woo, Seo Young-hee, Kim You-jung, Jung In-gi

Thought David Fincher's "Se7en" or "Zodiac" were among the most harrowing serial killer thrillers? The incredibly remorseless murderer in Na's breakout feature makes John Doe seem pretty chill in comparison, and even gives Bong Joon Ho's "Memories of Murder" a run for its money. Set in a world soaked in rain and blood, this cat-and-mouse story carries an all-pervasive sense of hopelessness, yet is so relentlessly paced and utterly gripping that you won't be able to take your eyes off it. Throw in a sharp critique of Korea's policing and legal systems, and "The Chaser" makes the emergence of a major new filmmaking talent incredibly clear.

## The Yellow Sea (2010)

![The Yellow Sea](${nhjYellowSea.url})

**Runtime:** 2hrs 36m | **Buy/Rent on:** Apple TV

**Starring:** Ha Jung-woo, Kim Yun-seok, Cho Seong-ha, Lee Cheol-min, Kwak Do-won, Im Ye-won

Continuing his bleak streak, the director's man-on-the-run thriller soaks its lead taxi driver, Gu-nam (Ha Jung-woo), in a world of desperation. After his contract kill goes wrong, he faces mobsters wanting to break his legs — and the police wanting to break them too. It's a brutal take on a man limping his way out of one sticky situation and into another, with many bloodied knives and smashed heads along the way. A sweaty, sweaty film that'll leave you desperate for a breather by the end of its whacking 156-minute runtime.

## The Wailing (2016)

![The Wailing](${nhjWailing.url})

**Runtime:** 2hrs 36m | **Streaming on:** Prime Video

**Starring:** Kwak Do-won, Hwang Jung-min, Chun Woo-hee, Jun Kunimura, Kim Hwan-hee, Heo Jin

Going full-bore into the horror genre, Director Na delivered one of the most downright terrifying films of the 21st century — channelling something primal in the tale of a South Korean village torn apart by supernatural murders, seemingly linked to a local Japanese stranger. It begins as a police procedural of sorts, as local copper Jong-goo (Kwak Do-won) investigates the terrible killings, before the film shifts into all-out waking-nightmare mode. Gorgeously shot, incredibly atmospheric, and with a final act that instils terror on a primal level, this 150-minute epic is a legitimate all-timer and yet still, somehow, criminally underseen. Get on it!`,
  },
];

// Deterministic shuffle so new lists spread across the interleaved homepage feed.
// New EW entries (indices 23-27) are interleaved near the top of the feed.
const _LIST_ORDER = [38, 34, 35, 32, 31, 37, 29, 28, 23, 36, 22, 0, 24, 17, 30, 33, 16, 25, 18, 14, 26, 19, 15, 27, 1, 20, 13, 7, 21, 3, 11, 5, 9, 2, 12, 6, 4, 8, 10];






const newestList = _LISTS_RAW[_LISTS_RAW.length - 1];
export const LISTS: ListItem[] = [
  ...(newestList ? [newestList] : []),
  ..._LIST_ORDER
    .filter((i) => i < _LISTS_RAW.length - 1)
    .map((i) => _LISTS_RAW[i]),
];

export function getList(slug: string) {
  return LISTS.find((l) => l.slug === slug);
}
