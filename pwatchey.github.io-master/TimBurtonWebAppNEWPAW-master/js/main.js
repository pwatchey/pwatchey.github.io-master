var getMovie = function()
{
	var movieId = document.getElementById("movieEntered").value.toLowerCase();

	if(movieId === 'the nightmare before christmas')
	{

		$('#homePage').hide();
		$('#movie1').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/nightmare1.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("nightmare").innerHTML = "The Nightmare Before Christmas";
		document.getElementById("nightmareQuote").innerHTML = "'What's this? There's children throwing snowballs instead of throwing heads "+
		"they're busy building toys and absolutely no one\'s dead!' <br> ~Jack Skellington";
		document.getElementById("nightmareBio").innerHTML = "Directed By: Henry Selick <br> Produced By: Tim Burton <br> Story By: Tim Burton, Joe Ranft, Michael McDowell <br> " +
		"<br> The Nightmare Before Christmas follows the misadventures of Jack Skellington, Halloweentown's beloved pumpkin king, who has become <br> " +
		"bored with the same annual routine of frightening people in the Real World. <br> "+" When Jack accidentally stumbles on Christmastown, all bright colors and warm spirits, <br> "
		+"he gets a new lease on life -- he plots to bring Christmas under his control by kidnapping <br> Santa Claus and taking over the role.<br> But Jack soon discovers even the best-laid plans of mice and skeleton men can go seriously awry.";


		$("audio").attr('src', 'music/Halloween.mp3');
		$("audio").trigger('play');
    }
   else if(movieId === 'corpse bride')
	{
		$('#homePage').hide();
		$('#movie2').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/corpse.jpg)';
		html.style.background = "contain, no-repeat";


		document.getElementById("corpseBride").innerHTML = "Corpse Bride";
		document.getElementById("brideQuote").innerHTML = "'Isn't the view beautiful? It takes my breath away. Well, it would if I had any.' <br> ~The Corpse Bride <br><br>" +
		"Directed By: Tim Burton, Mike Johnson <br> Produced By: Tim Burton, Allison Abate <br> Story By: John August, Pamela Pettler & Caroline Thompson <br>";

		document.getElementById("brideBio").innerHTML = "Victor Van Dort, son of fish merchants, finds himself in an arranged marriage with Victoria Everglot, <br>" +
		"a high-society woman whom he's never even spoken to. After Victor horribly messes up the wedding rehearsals, he ventures deep into the woods while practicing his vows.<br>" +
		" However, once he finally gets them right, he discovers he accidentally recited them to a corpse.<br>" +
		" His new, dead bride takes him with her to the Land of the Dead, <br>" +
		" while his living fiancee waits desperately for his return in the Land of the Living.<br> " +
		"With two brides both pining for him, Victor must decide between his love-at-first-sight fiancé Victoria, <br>" +
		"or his tragic corpse bride Emily.";



		$("audio").attr('src', 'music/CorpseBride.mp3');
		$("audio").trigger('play');
	}
	else if(movieId === 'sweeney todd')
	{
		$('#homePage').hide();
		$('#movie3').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/sweeny.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("sweeny").innerHTML = "Sweeny Todd: The Demon Barber of Fleet Street";
		document.getElementById("sweenyQuote").innerHTML = "'There's a hole in the world like a great black pit. And the vermin of the world inhabit it, <br>" +
		"And its morals aren't worth what a pig could spit! And it goes by the name of London.' <br > ~Sweeny Todd <br>" +
		" <br>Directed By: Tim Burton <br> Produced By: Richard D. Zanuck, Walter Parkes, Laurie MacDonald, John Logan <br> Story By: John Logan";

		document.getElementById("sweenyBio").innerHTML = "Evil Judge Turpin lusts for the beautiful wife of a London barber and transports him to Australia for a crime he did not commit. <br> " +
		"Returning after 15 years and calling himself Sweeney Todd, the now-mad man vows revenge, applying his razor to unlucky customers <br>" +
		"and shuttling the bodies down to Mrs. Lovett, who uses them in her meat-pie shop. <br> " + "Though many fall to his blade, he will not be satisfied until he slits Turpin's throat." ;

		$("audio").attr('src', 'music/SweenyTodd.mp3'); 
		$("audio").trigger('play'); 
	}
	else if(movieId === 'cabin boy')
	{
		$('#homePage').hide();
		$('#movie4').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/cabinBoy.png)';
		html.style.background = "contain, no-repeat";

		document.getElementById("cabinBoy").innerHTML = "Cabin Boy";
		document.getElementById("cabinQuote").innerHTML = "'Now I know what you're thinking. 'What could be stranger than<br>" +
		"a big fatass floatin cupcake?' Heh. How about one that spits tobacco?' <br > ~The Big Cupcake <br> <br>" +
		"Directed By: Adam Resnick <br> Produced By: Tim Burton, Denise Di Novi <br> Story By: Chris Elliot, Adam Resnick<br>";

		document.getElementById("cabinBio").innerHTML = "Nathaniel Mayweather, a recent graduate of the exclusive Fancy Lad Academy, unwittingly boards <br>" +
		"the wrong sea vessel and unsuccessfully tries to convince each fisherman to set sail to Hawaii, but convinces Kenny into doing so. <br> " +
		"However, Nathaniel ends up a whipping post for its gruff, foul-mouthed crew after his predecessor Kenny falls overboard and drowns. During his  <br> " +
		"ensuing Odyssey-like adventures, Mayweather befriends Chocki, a half-man/half-shark, gets deflowered by a blue-skinned, six-armed siren named Calli, <br>" +
		"and encounters a bevy of strange beings such as a walking iceberg and a flying cupcake that spits tobacco juice.";

		$("audio").attr('src', 'music/Cabin.mp3'); 
		$("audio").trigger('play'); 

	}
	else if(movieId === 'alice in wonderland')
	{
		$('#homePage').hide();
		$('#movie5').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/alice.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("alice").innerHTML = "Alice In Wonderland";
		document.getElementById("aliceQuote").innerHTML = "'What an idea. A crazy, mad, wonderful idea.' ~ Alice <br> <br>" +
		"Directed By: Tim Burton <br> Produced By: Richard D. Zanuck, Joe Roth, Suzanne Todd & Jennifer Todd <br> Story By: Linda Woolverton <br> Based on the story by Lewis Carroll <br>";

		document.getElementById("aliceBio").innerHTML = "A young girl when she first visited magical Underland, Alice Kingsleigh is now a teenager with no memory of the place -- except in her dreams. <br>" +
		"Her life takes a turn for the unexpected when, at a garden party for her fiance and herself, she spots a certain white rabbit  <br> " +
		"and tumbles down a hole after him. Reunited with her friends the Mad Hatter, the Cheshire Cat and others,  <br> " +
		"Alice learns it is her destiny to end the Red Queen's reign of terror.";

		$("audio").attr('src','music/Alice.mp3');
		$("audio").trigger('play');

	}
	else if(movieId === '9')
	{
		$('#homePage').hide();
		$('#movie6').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/9.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("nine").innerHTML = "9";
		document.getElementById("nineQuote").innerHTML = "'We had such potential. Such promise. But we squandered our gifts, our intelligence. <br> "+
		"Our blind pursuit of technology only sped us quicker to our doom. Our world is ending. <br> But life must go on.' ~ The Scientist <br> <br>" +
		"Directed By: Shane Ackler <br> Produced By: Tim Burton, Timur Bekmambetov, Dana Ginsburg & Jim Lemley<br> Story By: Shane Ackler, Pamela Pettler<br>";

		document.getElementById("nineBio").innerHTML = "When 9 springs to life, it finds itself in a post-apocalyptic world where humans no longer exist, and the only signs of life are sentient rag dolls  <br>" +
		"like itself and the machines that hunt them. Though it is the youngest of the group, 9 convinces its comrades that the only way to survive<br> " +
		"against the machines is to stop hiding, go on the offensive, and find out why the machines want to destroy them.<br> " +
		"As 9 and the group learn their own history, civilization hinges on their success or failure.";

		$("audio").attr('src','music/9.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'planet of the apes')
	{
		$('#homePage').hide();
		$('#movie7').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/apes.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("apes").innerHTML = "Planet of the Apes";
		document.getElementById("apesQuote").innerHTML = "'You know one day they'll tell a story about a human who came from the stars  <br> "+
		"and changed our world. Some will say it was just a fairy tale, that,  <br> it was never real. But I'll know' ~ Ari <br> <br>" +
		"Directed By: Tim Burton <br> Produced By:Richard D. Zanuck, Ralph Winter<br> Story By: William Broyles, Jr., Lawrence Konner, Mark Rosenthal<br> Based on the story by Pierre Boulle";

		document.getElementById("apesBio").innerHTML = "Leo Davidson, an astronaut of the early 21st century whose unauthorized mission to rescue a chimp companion from a mysterious space storm goes awry <br>" +
		"when he and his ship are lost through a rip in the fabric of time. Leo crash-lands on a planet where intelligent, talking apes <br> " +
		"are the dominant species and humans a conquered slave class. Befriending both a chimpanzee activist named Ari who's sympathetic to humans, <br> " +
		"and a beautiful human rebel, Daena, Leo quickly becomes a prominent figure of resistance to his fellow humans. This makes him an instant source of irritation for <br>" +
		"the militant and ambitious General Thade and his trusted adjutant, Attar who intend to hunt Leo down and crush the burgeoning human uprising.";

		$("audio").attr('src', 'music/Apes.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'batman')
	{
		$('#homePage').hide();
		$('#movie8').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/batman.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("batman").innerHTML = "Batman";
		document.getElementById("batmanQuote").innerHTML = "'Tell me something, my friend. You ever dance with the devil in the pale moonlight?'  <br> "+
		"~ The Joker <br> <br>" +
		"Directed By: Tim Burton <br> Produced By:Peter Guber, Jon Peters, Benjamin Melniker, & Michael Uslan<br>" +
		"Story By: Sam Hamm, Warren Skaaren<br> Based on characters appearing in magazines published by DC Comics, Inc. - Batman by Bob Kane";

		document.getElementById("batmanBio").innerHTML = "Having witnessed his parents' brutal murder as a child, millionaire philanthropist Bruce Wayne <br>" +
		"fights crime in Gotham City disguised as Batman, a costumed hero who strikes fear into the hearts of villains. <br> " +
		"But when a deformed madman who calls himself 'The Joker' seizes control of Gotham's criminal underworld, Batman must face his most ruthless nemesis ever   <br> " +
		"while protecting both his identity and his love interest, reporter Vicki Vale.<br>";

		$("audio").attr('src', 'music/batman.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'batman forever')
	{
		$('#homePage').hide();
		$('#movie9').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/batmanForever.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("batmanForever").innerHTML = "Batman Forever";
		document.getElementById("foreverQuote").innerHTML = "'Riddle me this, riddle me that, who's afraid of the big, black bat?' <br> "+
		"~ Riddler<br> <br>" +
		"Directed By: Joel Schumacher <br> Produced By: Tim Burton, Peter MacGregor-Scott<br>" +
		"Story By: Lee Batchler, Janet Scott-Batchler<br> Based on characters appearing in magazines published by DC Comics, Inc. - Batman by Bob Kane";

		document.getElementById("foreverBio").innerHTML = "Batman faces off against two foes: the schizophrenic, horribly scarred <br> former District Attorney Harvey Dent,<br>"+
		"aka Two-Face, and the Riddler, a disgruntled ex-Wayne Enterprises inventor seeking revenge against his former employer by unleashing <br>" +
		"his brain-sucking weapon on Gotham City's residents. As the caped crusader also deals with <br> tortured memories of his parents' murder,  <br> " +
		"he has a new romance, with psychologist Chase Meridian.<br>";

		$("audio").attr('src', 'music/batmanForever.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'batman returns')
	{
		$('#homePage').hide();
		$('#movie10').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/batmanReturns.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("batmanReturns").innerHTML = "Batman Returns";
		document.getElementById("returnsQuote").innerHTML = "'It's the so-called 'normal' guys who always let you down. <br> "+
						"Sickos never scare me. Least they're committed.' <br> ~ Selina Kyle (Catwoman) "+
		"Directed By: Tim Burton <br> Produced By: Tim Burton, Denise Di Novi<br>" +
		"Story By: Sam Hamm, Daniel Waters<br> Based on characters appearing in magazines published by DC Comics, Inc. - Batman by Bob Kane";

		document.getElementById("returnsBio").innerHTML = "The monstrous Penguin who lives in the sewers beneath Gotham, joins up ,<br>"+
		"with wicked shock-headed businessman Max Shreck to topple the Batman once and for all. <br>" +
		"But when Shreck's timid assistant, Selina Kyle, finds out, and Shreck tries to kill her, she is <br> " +
		"transformed into the sexy Catwoman. She teams up with the Penguin and Shreck to destroy <br>" + 
		"Batman, but sparks fly unexpectedly when she confronts the caped crusader. <br>";

		$("audio").attr('src', 'music/batmanReturns.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'charlie and the chocolate factory')
	{
		$('#homePage').hide();
		$('#movie11').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/charlie.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("factory").innerHTML = "Charlie and the Chocolate Factory";
		document.getElementById("factoryQuote").innerHTML = "' We are the makers of music and the dreamers of dreams <br> "+
						" ~ Willy Wonka <br>"+
		"Directed By: Tim Burton <br> Produced By: Brad Grey, Richard D. Zanuck<br>" +
		"Story By: John August<br> Based on Charlie and the Chocolate Factory by Ronald Dahl.<br>"; 
		
		document.getElementById("factoryBio").innerHTML = "Based on the beloved Roald Dahl tale, this comedic and fantastical film <br>"+
		"follows young Charlie Bucket and his Grandpa Joe as they join a small group <br>" +
		"of contest winners who get to tour the magical and mysterious factory of eccentric candy maker Willy Wonka.<br> " +
		"Aided by his diminutive Oompa Loompa workers, Wonka has a hidden motivation for the tour, <br>" + 
		"one that he will reveal only after the children in the group show their true colors.<br>";

		$("audio").attr('src', 'music/chocolateFactory.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'edward scissorhands')
	{
		$('#homePage').hide();
		$('#movie12').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/scissorhands.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("scissors").innerHTML = "Edward Scissorhands";
		document.getElementById("scissorsQuote").innerHTML = "' No matter what, Edward will always be special.' <br>"+
						" ~ Peg Bogs<br>"+
		"Directed By: Tim Burton <br> Produced By: Tim Burton, Denise Di Novi<br>" +
		"Story By: Tim Burton, Caroline Thompson<br>"; 
		
		document.getElementById("scissorsBio").innerHTML = "A scientist builds an animated human being -- the gentle Edward. <br>"+
		"The scientist dies before he can finish assembling Edward, though, leaving the young man with a freakish appearance " +
		"accentuated by the scissor blades he has instead of hands. <br> " +
		"Loving suburban saleswoman Peg discovers Edward and takes him home, where he falls for Peg's teen daughter." + 
		"However, despite his kindness and artistic talent, Edward's hands make him an outcast.<br>";

		$("audio").attr('src', 'music/Scissorhands.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'james and the giant peach')
	{
		$('#homePage').hide();
		$('#movie13').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/giantPeach.jpg)';
		html.style.background = "contain, no-repeat";

		document.getElementById("peach").innerHTML = "James and the Giant Peach";
		document.getElementById("peachQuote").innerHTML = "'My dear young fellow, there are a whole lot<br>"+
						"of things in this world of ours that you haven't <br>"+
						"wondering about yet.' <br> ~ The Grasshopper"+
		"Directed By: Henry Selick <br> Produced By: Tim Burton, Denise Di Novi<br>" +
		"Story By: 	Karey Kirkpatrick, Jonathan Roberts, Steve Bloom<br>Based on James and the Giant Peach by Ronald Dahl"; 
		
		document.getElementById("peachBio").innerHTML = "Featuring stop-motion animation and live action, this inventive adaptation of Roald Dahl's  <br>"+
		"beloved children's tale follows the adventures of James, an orphaned young British boy.   <br>" +
		"Forced to live with his cruel aunts, James finds a way out of his bleak existence when he <br> " +
		"discovers an enormous enchanted peach. After rolling into the sea inside the buoyant fruit,   <br>" + 
		"James, accompanied by a crew of friendly talking insects, sets sail for New York City.<br>";

		$("audio").attr('src', 'music/Peach.mp3');
		$("audio").trigger('play'); 
	}
	else if(movieId === 'beetlejuice')
	{
		$('#homePage').hide();
		$('#movie14').show(); 

		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/beetlejuice.png)';
		html.style.background = "contain, no-repeat";

		document.getElementById("beetle").innerHTML = "Beetlejuice";
		document.getElementById("beetleQuote").innerHTML = "'I've seen The Exorcist about 167 times and it<br>"+
						"keeps getting funnier every single time I see it!' ~Beetlegeuse <br><br>"+
		"Directed By: Tim Burton <br> Produced By: Larry Wilson, Michael Bender, Richard Hashimoto<br>" +
		"Story By: 	Warren Skaaren, Michael McDowell, Larry Wilson<br>"; 
		
		document.getElementById("beetleBio").innerHTML = "After Barbara and Adam Maitland die in a car accident,  <br>"+
		"they find themselves stuck haunting their country residence, unable to leave the house.    <br>" +
		"When the unbearable Deetzes and teen daughter Lydia buy the home, <br> " +
		"the Maitlands attempt to scare them away without success.   <br>" + 
		"Their efforts attract Beetlejuice, a rambunctious spirit whose 'help' quickly becomes <br>"+
		"dangerous for the Maitlands and innocent Lydia.";

		$("audio").attr('src', 'music/Beetlejuice.mp3');
		$("audio").trigger('play'); 
	}
	else
	{
		console.log(movieId);
		$('section').hide();

		$('#homePage').show();
		var html = document.getElementsByTagName('html')[0];
		html.style.backgroundImage = 'url(images/background.jpg)';
		html.style.background = "contain, no-repeat";

		$("audio").trigger('pause');
	}




}
