// Tarot Card Descriptions - Storytelling format (~50 words each)
// Multi-language support for all 78 cards

// Card name translations
const cardNameTranslations = {
	en: {}, // English names are the default
	fr: {
		"The Fool": "Le Mat",
		"The Magician": "Le Bateleur",
		"The High Priestess": "La Papesse",
		"The Empress": "L'Impératrice",
		"The Emperor": "L'Empereur",
		"The Hierophant": "Le Pape",
		"The Lovers": "Les Amoureux",
		"The Chariot": "Le Chariot",
		"Strength": "La Force",
		"The Hermit": "L'Ermite",
		"Wheel of Fortune": "La Roue de Fortune",
		"Justice": "La Justice",
		"The Hanged Man": "Le Pendu",
		"Death": "La Mort",
		"Temperance": "La Tempérance",
		"The Devil": "Le Diable",
		"The Tower": "La Maison Dieu",
		"The Star": "L'Étoile",
		"The Moon": "La Lune",
		"The Sun": "Le Soleil",
		"Judgement": "Le Jugement",
		"The World": "Le Monde",
		"Ace of Wands": "As de Bâtons",
		"Two of Wands": "Deux de Bâtons",
		"Three of Wands": "Trois de Bâtons",
		"Four of Wands": "Quatre de Bâtons",
		"Five of Wands": "Cinq de Bâtons",
		"Six of Wands": "Six de Bâtons",
		"Seven of Wands": "Sept de Bâtons",
		"Eight of Wands": "Huit de Bâtons",
		"Nine of Wands": "Neuf de Bâtons",
		"Ten of Wands": "Dix de Bâtons",
		"Page of Wands": "Valet de Bâtons",
		"Knight of Wands": "Cavalier de Bâtons",
		"Queen of Wands": "Reine de Bâtons",
		"King of Wands": "Roi de Bâtons",
		"Ace of Cups": "As de Coupes",
		"Two of Cups": "Deux de Coupes",
		"Three of Cups": "Trois de Coupes",
		"Four of Cups": "Quatre de Coupes",
		"Five of Cups": "Cinq de Coupes",
		"Six of Cups": "Six de Coupes",
		"Seven of Cups": "Sept de Coupes",
		"Eight of Cups": "Huit de Coupes",
		"Nine of Cups": "Neuf de Coupes",
		"Ten of Cups": "Dix de Coupes",
		"Page of Cups": "Valet de Coupes",
		"Knight of Cups": "Cavalier de Coupes",
		"Queen of Cups": "Reine de Coupes",
		"King of Cups": "Roi de Coupes",
		"Ace of Swords": "As d'Épées",
		"Two of Swords": "Deux d'Épées",
		"Three of Swords": "Trois d'Épées",
		"Four of Swords": "Quatre d'Épées",
		"Five of Swords": "Cinq d'Épées",
		"Six of Swords": "Six d'Épées",
		"Seven of Swords": "Sept d'Épées",
		"Eight of Swords": "Huit d'Épées",
		"Nine of Swords": "Neuf d'Épées",
		"Ten of Swords": "Dix d'Épées",
		"Page of Swords": "Valet d'Épées",
		"Knight of Swords": "Cavalier d'Épées",
		"Queen of Swords": "Reine d'Épées",
		"King of Swords": "Roi d'Épées",
		"Ace of Pentacles": "As de Deniers",
		"Two of Pentacles": "Deux de Deniers",
		"Three of Pentacles": "Trois de Deniers",
		"Four of Pentacles": "Quatre de Deniers",
		"Five of Pentacles": "Cinq de Deniers",
		"Six of Pentacles": "Six de Deniers",
		"Seven of Pentacles": "Sept de Deniers",
		"Eight of Pentacles": "Huit de Deniers",
		"Nine of Pentacles": "Neuf de Deniers",
		"Ten of Pentacles": "Dix de Deniers",
		"Page of Pentacles": "Valet de Deniers",
		"Knight of Pentacles": "Cavalier de Deniers",
		"Queen of Pentacles": "Reine de Deniers",
		"King of Pentacles": "Roi de Deniers"
	},
	es: {}, // Spanish - cards use English names commonly
	zh: {}, // Chinese - cards use English names commonly
	ja: {}, // Japanese - cards use English names commonly
	ko: {}  // Korean - cards use English names commonly
};

// Load translations from external JSON file
let cardDescriptions = {
	en: {
		// Major Arcana
		"The Fool": "A young traveler stands at the cliff's edge, eyes on infinite sky rather than the ground below. The Fool embodies pure potential and spontaneous joy, ready to leap into the unknown. Upright brings innocent new beginnings and fearless adventure. Reversed warns against recklessness and poor judgment in life's journey.",
		"The Magician": "With tools of all four elements before him, the Magician channels cosmic power into earthly manifestation. One hand points to heaven, one to earth, bridging spiritual and material realms. Upright signifies willpower and creative power to manifest desires. Reversed indicates manipulation, unused talents, or illusions clouding reality.",
		"The High Priestess": "Seated between pillars of duality, she guards the veil to the unconscious mind. The High Priestess holds sacred mysteries and intuitive wisdom beyond rational thought. Upright represents inner voice, intuition, and hidden knowledge. Reversed suggests disconnection from intuition, secrets kept, or repressed feminine wisdom within.",
		"The Empress": "In abundant nature she reclines, pregnant with creative potential and nurturing energy. The Empress embodies fertility, beauty, and the sensual pleasures of earthly existence. Upright brings motherhood, abundance, and natural growth. Reversed warns of creative blocks, dependence, or smothering care that stifles growth and independence.",
		"The Emperor": "Armored and throned, he represents structure, authority, and paternal protection. The Emperor establishes order through rules, boundaries, and disciplined control. Upright signifies leadership, stability, and protective power. Reversed indicates tyranny, rigidity, or the cold domination of excessive control without compassion or flexibility.",
		"The Hierophant": "A spiritual teacher sits between two pillars, keeper of traditional wisdom and sacred institutions. The Hierophant represents conformity to established belief systems and cultural values. Upright brings traditional learning, spiritual guidance, and moral structure. Reversed signals rebellion against convention, questioning dogma, or finding your own spiritual path.",
		"The Lovers": "Two figures stand beneath an angel's blessing, representing union, choice, and partnership. The Lovers symbolizes both romantic connection and critical decisions at life's crossroads. Upright signifies harmonious relationships, alignment, and important choices. Reversed warns of imbalance, disharmony, or difficult decisions causing internal conflict.",
		"The Chariot": "A warrior rides victoriously forward, controlling opposing forces through willpower and determination. The Chariot represents triumph achieved through focused intent and self-discipline. Upright brings success, control, and forward momentum. Reversed indicates loss of direction, lack of self-control, or aggression without purpose or restraint.",
		"Strength": "A woman gently closes a lion's jaws, taming the beast through compassion rather than force. Strength represents courage, patience, and the quiet power of inner resolve. Upright signifies inner fortitude, bravery, and gentle control. Reversed warns of self-doubt, weakness, or raw emotion untempered by wisdom and compassion.",
		"The Hermit": "An old sage stands alone on a mountaintop, lantern raised to illuminate the path ahead. The Hermit represents solitude, introspection, and the search for deeper truth within. Upright brings soul-searching, inner guidance, and contemplation. Reversed suggests isolation, loneliness, or withdrawal from life's lessons and human connection.",
		"Wheel of Fortune": "The great wheel turns ceaselessly, carrying figures up and down in life's inevitable cycles. Wheel of Fortune represents destiny, change, and the turning points beyond our control. Upright brings good fortune, life cycles, and destiny unfolding. Reversed signals resistance to change, bad luck, or clinging desperately to control.",
		"Justice": "Sword in one hand and scales in the other, Justice sits enthroned in absolute clarity. She represents truth, fairness, and the law of cause and effect governing all. Upright signifies truth, fairness, and karmic balance. Reversed warns of dishonesty, unfair treatment, or avoiding accountability for your actions.",
		"The Hanged Man": "Suspended upside-down yet peaceful, he sees the world from an entirely new perspective. The Hanged Man represents willing sacrifice, letting go, and the wisdom gained through surrender. Upright brings new perspectives, release, and necessary pause. Reversed indicates stalling, needless martyrdom, or fear preventing necessary sacrifice and growth.",
		"Death": "A skeleton in black armor rides forth, representing transformation rather than literal ending. Death signals profound change as the old must die for new life to emerge. Upright brings transformation, endings, and necessary change. Reversed warns of resistance to change, fear of endings, or stagnation blocking natural transformation.",
		"Temperance": "An angel pours water between two cups, demonstrating perfect balance and harmonious flow. Temperance represents moderation, patience, and the middle path between all extremes. Upright signifies balance, patience, and moderation. Reversed indicates excess, imbalance, or lack of harmony disrupting your life's natural flow.",
		"The Devil": "Chained figures stand before a horned demon, yet their bonds are loose enough to slip free. The Devil represents bondage, addiction, and the shadow self that binds us. Upright warns of materialism, addiction, and bondage. Reversed brings freedom, release, and breaking chains that held you captive to darkness.",
		"The Tower": "Lightning strikes the crown, sending figures tumbling from crumbling walls of false security. The Tower represents sudden upheaval, necessary destruction, and the chaos that precedes rebuilding. Upright brings sudden change, revelation, and destruction. Reversed signals disaster delayed, fear of change, or avoiding the inevitable collapse ahead.",
		"The Star": "A woman pours living water onto earth and pool beneath a canopy of brilliant stars. The Star represents hope, healing, and divine inspiration flowing after the Tower's destruction. Upright brings hope, inspiration, and spiritual renewal. Reversed warns of faithlessness, despair, or disconnection from the guiding light within you.",
		"The Moon": "Between two towers, a path winds toward the moon while dogs howl at illusions. The Moon represents the unconscious, illusions, and the fears that haunt the darkness within. Upright signifies intuition, dreams, and the unconscious. Reversed brings clarity, releasing fear, or seeing through illusions that deceived you.",
		"The Sun": "A naked child rides a white horse beneath the brilliant sun's life-giving rays. The Sun represents joy, success, and the clarity of truth illuminating everything it touches. Upright brings joy, success, and positivity. Reversed warns of temporary clouds, sadness, or blocked vitality dimming your natural radiance and joy.",
		"Judgement": "An angel sounds the trumpet as figures rise, answering the call to awakening and transformation. Judgement represents resurrection, reckoning, and the moment of final evaluation and rebirth. Upright signifies reflection, awakening, and inner calling. Reversed indicates self-doubt, harsh judgment, or inability to forgive yourself and move forward.",
		"The World": "A dancer celebrates within a laurel wreath, having completed the journey and achieved wholeness. The World represents completion, accomplishment, and the fulfillment of the soul's purpose. Upright brings completion, accomplishment, and fulfillment. Reversed warns of incomplete goals, lack of closure, or feeling unfinished despite journey's end.",

		// Wands
		"Ace of Wands": "A hand emerges from clouds, grasping a sprouting wand bursting with creative potential. This Ace brings pure inspiration, passionate beginnings, and the spark of new creative ventures. Upright signifies creative inspiration and new opportunities. Reversed warns of missed chances, lack of direction, or creative energy blocked and unexpressed.",
		"Two of Wands": "A figure stands between two wands, gazing at distant horizons while planning future conquests. This card represents planning, decision-making, and preparing to leave safety for adventure. Upright brings planning and future vision. Reversed indicates fear of unknown, poor planning, or playing it too safe in life.",
		"Three of Wands": "A figure watches ships sail toward horizon, having set plans in motion now watching them unfold. This card represents expansion, foresight, and the fruits of preparation coming to fruition. Upright signifies expansion and looking ahead. Reversed warns of obstacles, delays, or frustrated plans not unfolding as expected.",
		"Four of Wands": "Four wands form a celebratory bower as figures dance beneath in joyful community celebration. This card represents homecoming, celebration, and the harmony of establishing firm foundations. Upright brings celebration and community. Reversed indicates lack of support, instability, or missing sense of home and belonging.",
		"Five of Wands": "Five figures clash their wands in chaotic conflict, each struggling for dominance and position. This card represents competition, conflict, and the struggle of many competing interests colliding. Upright signifies competition and conflict. Reversed brings avoiding confrontation, finding agreement, or pointless struggles finally ending.",
		"Six of Wands": "A victor rides through crowds, laurel wreath crowning his head as admirers celebrate his triumph. This card represents public recognition, victory, and success acknowledged by your community. Upright brings victory and recognition. Reversed warns of pride before fall, delayed success, or lack of acknowledgment deserved.",
		"Seven of Wands": "One figure defends high ground against six attacking wands, standing firm despite the challenge. This card represents perseverance, defense, and maintaining position against opposition and doubt. Upright signifies defensive strength and perseverance. Reversed indicates exhaustion, giving up, or feeling completely overwhelmed by ongoing challenges.",
		"Eight of Wands": "Eight wands fly through air at great speed, energy moving swiftly toward distant destination. This card represents rapid movement, swift action, and messages or events arriving suddenly and quickly. Upright brings swift action and movement. Reversed warns of delays, slowdown, or panicked rushing leading to poor decisions.",
		"Nine of Wands": "A wounded warrior stands guard, wary and watchful despite exhaustion from previous battles fought. This card represents resilience, persistence, and the last defense before final victory or defeat. Upright signifies resilience and determination. Reversed indicates exhaustion, paranoia, or questioning whether continued struggle remains worthwhile.",
		"Ten of Wands": "A figure struggles beneath the burden of ten heavy wands, nearly crushed by responsibility. This card represents overwhelming burden, hard work, and the weight of too much responsibility accepted. Upright brings accomplishment through burden. Reversed signals release, delegation, or finally letting go of unnecessary weight carried.",
		"Page of Wands": "A young figure holds a sprouting wand, eyes bright with enthusiasm for adventure ahead. This messenger brings news of creative opportunities, exploration, and enthusiastic new beginnings. Upright signifies enthusiasm and exploration. Reversed warns of immature actions, lack of direction, or unfocused scattered energy.",
		"Knight of Wands": "A knight charges forward on rearing horse, passionate and impulsive in pursuit of adventure. This knight represents action, adventure, and the fearless pursuit of passionate goals and desires. Upright brings passionate action and adventure. Reversed indicates recklessness, anger, or impulsive actions without thought of consequences ahead.",
		"Queen of Wands": "She sits confidently on her throne, black cat at her side and sunflowers blooming around. This queen embodies confidence, determination, and the warmth of passionate creative energy channeled. Upright signifies courage and determination. Reversed warns of selfishness, jealousy, or domineering behavior overshadowing your better qualities.",
		"King of Wands": "The king commands from his throne, lizards representing transformation decorating his power and authority. This king represents bold leadership, vision, and the ability to inspire others toward goals. Upright brings leadership and vision. Reversed indicates impulsiveness, arrogance, or setting expectations others cannot possibly meet successfully.",

		// Cups
		"Ace of Cups": "A hand offers an overflowing cup while dove descends, representing new emotional and spiritual beginnings. This Ace brings love, compassion, and the opening of your heart to new feelings. Upright signifies new feelings and love. Reversed warns of emotional loss, blocked creativity, or heart closed to love's possibilities.",
		"Two of Cups": "Two figures exchange cups beneath caduceus, pledging partnership, love, and mutual emotional connection. This card represents unity, partnership, and balanced harmonious relationships built on equality. Upright brings partnership and connection. Reversed indicates imbalance, broken communication, or relationships suffering from disharmony and tension.",
		"Three of Cups": "Three women raise cups in joyful celebration of friendship, community, and shared happiness together. This card represents friendship, celebration, and the bonds of community supporting mutual joy. Upright signifies friendship and celebration. Reversed warns of overindulgence, gossip, or isolation from supportive community connections.",
		"Four of Cups": "A figure sits beneath tree, arms crossed, ignoring the cup offered by mysterious hand. This card represents apathy, contemplation, and missing opportunities through disengagement and withdrawal. Upright brings meditation and contemplation. Reversed signals sudden awareness, choosing happiness, or finally seeing opportunities previously missed.",
		"Five of Cups": "A cloaked figure mourns three spilled cups, failing to notice two standing cups behind. This card represents loss, grief, and dwelling on disappointment while missing what remains available. Upright signifies loss and grief. Reversed brings acceptance, moving forward, or finding peace after prolonged period of mourning.",
		"Six of Cups": "Children exchange flowering cups in scenes of nostalgia, innocence, and pleasant childhood memories recalled. This card represents happy memories, nostalgia, and the healing comfort of revisiting the past. Upright brings nostalgia and happy memories. Reversed indicates moving forward, leaving home, or releasing past to embrace present reality.",
		"Seven of Cups": "Seven cups float in clouds, each containing different visions representing choices and illusions. This card represents choices, fantasy, and the challenge of distinguishing real opportunities from illusions. Upright signifies imagination and choices. Reversed warns of lack of purpose, wishful thinking, or confusion clouding clear judgment.",
		"Eight of Cups": "A figure walks away from eight stacked cups, seeking something deeper beneath the moon. This card represents walking away, spiritual journey, and leaving behind what no longer serves growth. Upright brings moving forward and seeking. Reversed indicates avoidance, fear of change, or staying in situations requiring departure.",
		"Nine of Cups": "A contented figure sits before nine cups, arms crossed in satisfaction and emotional fulfillment. This 'wish card' represents satisfaction, emotional stability, and getting what your heart truly desires. Upright signifies satisfaction and contentment. Reversed warns of smugness, dissatisfaction, or realizing material success lacks emotional fulfillment.",
		"Ten of Cups": "A family stands beneath a rainbow of ten cups, representing ultimate emotional and domestic fulfillment. This card represents lasting happiness, harmony, and the achievement of emotional dreams coming true. Upright brings happiness and fulfillment. Reversed warns of shattered dreams, family discord, or domestic disharmony disrupting peace.",
		"Page of Cups": "A young dreamer gazes at the fish emerging from their cup, bringing messages and surprises. This messenger brings creative inspiration, intuitive messages, and gentle emotional surprises arriving unexpectedly. Upright signifies sensitivity and creativity. Reversed warns of emotional immaturity, insecurity, or disappointment when reality contradicts dreams.",
		"Knight of Cups": "A romantic knight offers his cup, representing emotional idealism and pursuit of heart's desires. This knight brings proposals, romantic gestures, and the idealistic pursuit of love and beauty. Upright signifies romance and idealism. Reversed indicates moodiness, jealousy, or disappointment when idealized dreams meet harsh reality.",
		"Queen of Cups": "She sits at water's edge, holding an ornate cup while nurturing all with compassion. This queen embodies emotional maturity, intuition, and the gift of compassionate understanding and care. Upright brings compassion and intuition. Reversed warns of martyrdom, insecurity, or excessive dependence draining emotional reserves completely.",
		"King of Cups": "The king maintains emotional balance despite turbulent seas, mastering feelings without being controlled. This king represents emotional maturity, diplomacy, and wisdom balancing heart and mind together. Upright signifies emotional balance and wisdom. Reversed indicates emotional manipulation, moodiness, or bad advice from an unstable source.",

		// Swords
		"Ace of Swords": "A hand grasps a upright sword crowned in laurel, representing mental clarity and breakthrough. This Ace brings truth, clarity, and the power of mental focus cutting through confusion. Upright signifies breakthrough and clarity. Reversed warns of confusion, chaos, or brutal clarity revealing painful truths best left hidden.",
		"Two of Swords": "A blindfolded figure sits between two swords, unable to choose between difficult opposing options. This card represents indecision, stalemate, and the paralysis of choosing between two equally difficult paths. Upright brings difficult decisions and stalemate. Reversed indicates choosing lesser evil, releasing stalemate, or making impossible choice finally.",
		"Three of Swords": "Three swords pierce a heart beneath stormy skies, representing heartbreak and emotional pain. This card represents grief, heartbreak, and the suffering of emotional wounds that cut deeply. Upright signifies heartbreak and sorrow. Reversed brings healing, forgiveness, or slowly recovering from deep emotional wounds that scarred you.",
		"Four of Swords": "A figure lies in restful contemplation, three swords displayed while one sword rests nearby. This card represents rest, restoration, and the necessary pause for recovery and contemplation after struggle. Upright brings rest and restoration. Reversed warns of restlessness, burnout, or inability to rest despite desperate need for recovery.",
		"Five of Swords": "A victor gathers swords while defeated figures retreat, representing hollow victory and conflict's cost. This card represents conflict, defeat, and winning battles at cost of relationships and integrity. Upright signifies conflict and defeat. Reversed brings forgiveness, making amends, or releasing resentment poisoning your relationships and peace.",
		"Six of Swords": "A ferryman guides passengers across troubled waters toward calmer shores and better times. This card represents transition, moving on, and leaving difficulties behind for calmer, better circumstances. Upright brings transition and moving forward. Reversed indicates emotional baggage, unresolved issues, or resisting necessary transitions and healthy change.",
		"Seven of Swords": "A figure sneaks away carrying five swords, leaving two behind in secretive, strategic retreat. This card represents strategy, deception, and the cunning required to navigate difficult situations cleverly. Upright signifies strategy and deception. Reversed brings confession, rethinking approach, or discovery of deception previously hidden from view.",
		"Eight of Swords": "A bound and blindfolded figure stands surrounded by eight swords, appearing trapped yet restrictions are removable. This card represents imprisonment, self-victimization, and the mental restrictions we place upon ourselves unnecessarily. Upright signifies restriction and victimization. Reversed brings self-liberation, new perspective, or finally removing self-imposed limitations blocking freedom.",
		"Nine of Swords": "A figure sits upright in bed, face covered in anguish beneath nine swords. This card represents anxiety, nightmares, and the torment of worry and fear that haunts you. Upright signifies anxiety and despair. Reversed brings hope, reaching for help, or finding relief from mental anguish through support.",
		"Ten of Swords": "A figure lies face-down, ten swords piercing their back beneath dawn's approaching light. This card represents rock bottom, painful ending, and the darkest moment before new beginning's dawn. Upright signifies painful endings and defeat. Reversed brings recovery, rising again, or realizing the worst has passed and healing begins.",
		"Page of Swords": "A young figure holds a sword aloft, vigilant and curious with quick wit and restless mental energy. This messenger brings news, ideas, and the intellectual curiosity that questions everything encountered boldly. Upright signifies curiosity and vigilance. Reversed warns of deception, gossip, or mental energy scattered without focus or direction.",
		"Knight of Swords": "A knight charges forward with sword raised, representing swift action and aggressive intellectual pursuit. This knight brings quick action, assertiveness, and the fierce defense of beliefs and ideals. Upright signifies swift action and assertiveness. Reversed indicates recklessness, impulsiveness, or charging forward without thought of destructive consequences ahead.",
		"Queen of Swords": "She sits alone on her throne, sword raised in sharp perception and clear judgment. This queen embodies intellectual clarity, perceptiveness, and the ability to see truth through complexity. Upright brings clear thinking and independence. Reversed warns of cold cruelty, bitterness, or harsh judgment without compassion's tempering influence.",
		"King of Swords": "The king sits in judgment, sword representing intellect, authority, and impartial truth-seeking. This king represents mental clarity, authority, and the ability to judge fairly with logic. Upright signifies truth and mental clarity. Reversed indicates manipulation, cruelty, or using intelligence for control rather than justice's service.",

		// Pentacles
		"Ace of Pentacles": "A hand offers a golden pentacle amid flourishing garden, representing new material opportunities. This Ace brings prosperity, new ventures, and the manifestation of material goals and security. Upright signifies new opportunities and prosperity. Reversed warns of missed opportunities, bad investments, or material loss through poor judgment.",
		"Two of Pentacles": "A figure juggles two pentacles in infinite loop, balancing competing priorities and constant change. This card represents balance, adaptation, and the juggling of multiple responsibilities and choices continuously. Upright brings balance and adaptation. Reversed indicates overwhelm, disorganization, or loss of balance causing everything to crash.",
		"Three of Pentacles": "A craftsman displays his work in cathedral as others observe and approve his skilled mastery. This card represents teamwork, collaboration, and recognition of skills through quality work performed well. Upright signifies teamwork and competence. Reversed warns of lack of teamwork, poor planning, or group conflict undermining collective success.",
		"Four of Pentacles": "A figure clutches pentacles tightly, crown on head while hoarding resources in fearful control. This card represents security, control, and the fear-based need to hold tight to resources. Upright brings security and conservation. Reversed indicates greed, possessiveness, or releasing tight control to allow abundance's natural flow.",
		"Five of Pentacles": "Two figures struggle through snow past a lit church window, representing hardship and isolation. This card represents financial loss, poverty, and feeling left out in the cold without support. Upright signifies hardship and poverty. Reversed brings recovery, charity received, or finding help after prolonged period of struggle.",
		"Six of Pentacles": "A merchant weighs gold in scales while giving to those in need below him. This card represents generosity, charity, and the fair distribution of resources and power among all. Upright brings generosity and fairness. Reversed warns of strings attached, one-sided giving, or using charity to control and manipulate others.",
		"Seven of Pentacles": "A farmer rests on his staff, contemplating crops grown through patience and hard work. This card represents patience, perseverance, and assessing progress of long-term investments and efforts made. Upright signifies patience and assessment. Reversed warns of work without results, impatience, or lack of rewards despite efforts invested.",
		"Eight of Pentacles": "A craftsman carefully hammers away at pentacles, dedicated to mastering his chosen skill perfectly. This card represents dedication, skill development, and the focused work of perfecting your craft. Upright brings skill and dedication. Reversed indicates lack of passion, mediocrity, or going through motions without heart invested.",
		"Nine of Pentacles": "A woman stands in abundant garden, falcon on hand, enjoying fruits of her labor. This card represents self-sufficiency, luxury, and enjoying well-earned rewards of disciplined work and independence. Upright signifies independence and luxury. Reversed warns of reckless spending, false success, or living beyond means you cannot sustain.",
		"Ten of Pentacles": "Three generations gather amid symbols of lasting wealth, legacy, and family prosperity continuing onward. This card represents legacy, inheritance, and the culmination of lasting material and family security. Upright brings legacy and lasting success. Reversed indicates financial instability, family conflict, or fleeting success without lasting foundations.",
		"Page of Pentacles": "A young figure studies a pentacle intently, representing ambition, new opportunities, and practical learning. This messenger brings opportunities, manifestation potential, and practical plans beginning to take solid form. Upright signifies ambition and opportunity. Reversed warns of procrastination, lack of commitment, or opportunities wasted through poor planning.",
		"Knight of Pentacles": "A knight sits motionless on heavy horse, methodically progressing toward goals with steady determination. This knight represents reliability, hard work, and the slow but steady approach to achievement. Upright brings reliability and hard work. Reversed indicates laziness, obsessiveness, or working hard without progress or meaningful reward achieved.",
		"Queen of Pentacles": "She sits surrounded by abundant nature, nurturing all with practical care and material comfort. This queen embodies practical nurturing, financial security, and creating comfortable, stable environments for growth. Upright signifies practical care and abundance. Reversed warns of self-centeredness, jealousy, or using resources to smother rather than nurture.",
		"King of Pentacles": "The king sits enthroned amid symbols of wealth, representing mastery of material world and abundance. This king represents prosperity, business acumen, and the wisdom to build lasting material success. Upright brings prosperity and stability. Reversed indicates greed, materialism, or using wealth for excess rather than meaningful security."
	}
};

// Load translations from external JSON file
(async function loadTranslations() {
	try {
		const response = await fetch('../decks/card-descriptions-translations.json');
		if (response.ok) {
			const translations = await response.json();
			// Merge translations into cardDescriptions
			cardDescriptions.fr = translations.fr;
			cardDescriptions.es = translations.es;
			cardDescriptions.zh = translations.zh;
			cardDescriptions.ja = translations.ja;
			cardDescriptions.ko = translations.ko;
			console.log('Card description translations loaded successfully');
		}
	} catch (error) {
		console.warn('Could not load card description translations:', error);
	}
})();
