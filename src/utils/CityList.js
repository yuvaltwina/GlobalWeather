const cities = [
  `Aachen`,
  `Aarhus`,
  `Abbeville`,
  `Aberdeen (UK)`,
  `Aberdeen (South Dakota)`,
  `Aberdeen (Washington)`,
  `Abidjan`,
  `Abilene`,
  `Abu Dhabi`,
  `Abuja`,
  `Acapulco`,
  `Accra`,
  `Adamstown`,
  `Addis Ababa`,
  `Adelaide`,
  `Adelboden`,
  `Agadir`,
  `Agde`,
  `Agen`,
  `Agios Nikolaos`,
  `Agra`,
  `Agrigento`,
  `Agropoli`,
  `Ahmedabad`,
  `Aigues-Mortes`,
  `Aix-en-Provence`,
  `Aix-les-Bains`,
  `Ajaccio`,
  `Ajman`,
  `Akron`,
  `Al Ain`,
  `Alanya`,
  `Alaró`,
  `Albacete`,
  `Albany`,
  `Albenga`,
  `Albi`,
  `Albufeira`,
  `Albuquerque`,
  `Alcudia`,
  `Aleppo`,
  `Alessandria`,
  `Ålesund`,
  `Alexandria (U.S.)`,
  `Alexandria (Egypt)`,
  `Algeciras`,
  `Alghero`,
  `Algiers`,
  `Alicante`,
  `Alkmaar`,
  `Allentown`,
  `Almaty`,
  `Alofi`,
  `Alpe d'Huez`,
  `Alta Badia`,
  `Altea`,
  `Altoona`,
  `Amalfi`,
  `Amapala`,
  `Amarillo`,
  `Ambon`,
  `Amersfoort`,
  `Amiens`,
  `Amman`,
  `Amsterdam`,
  `Anaheim`,
  `Anchorage`,
  `Ancona`,
  `Andalo`,
  `Andermatt`,
  `Andorra la Vella`,
  `Andratx`,
  `Andria`,
  `Angeles City`,
  `Angers`,
  `Angoulême`,
  `Ankara`,
  `Ann Arbor`,
  `Annapolis`,
  `Annecy`,
  `Antalya`,
  `Antananarivo`,
  `Antibes`,
  `Antigua Guatemala`,
  `Antwerp`,
  `Anzio`,
  `Ao Nang`,
  `Aosta`,
  `Apeldoorn`,
  `Apia`,
  `Appleton`,
  `Aqaba`,
  `Aracaju`,
  `Arcachon`,
  `Arenzano`,
  `Arequipa`,
  `Arezzo`,
  `Argostoli`,
  `Arica`,
  `Arles`,
  `Arlington (Virginia)`,
  `Arlington (Texas)`,
  `Armagh`,
  `Arnhem`,
  `Arosa`,
  `Arras`,
  `Arrecife`,
  `Artà`,
  `Asbury Park`,
  `Ascoli Piceno`,
  `Ascona`,
  `Ashdod`,
  `Ashgabat`,
  `Ashkelon`,
  `Asmara`,
  `Aspen`,
  `Asti`,
  `Astoria`,
  `Asunción`,
  `Atafu`,
  `Athens`,
  `Athlone`,
  `Atlanta`,
  `Atlantic City`,
  `Auckland`,
  `Augsburg`,
  `Augusta (Georgia)`,
  `Augusta (Maine)`,
  `Aurora (Colorado)`,
  `Aurora (Illinois)`,
  `Austin`,
  `Auxerre`,
  `Avalon (California)`,
  `Avalon (New Jersey)`,
  `Avarua`,
  `Aveiro`,
  `Avellino`,
  `Avignon`,
  `Avila Beach`,
  `Avoriaz`,
  `Axamer Lizum`,
  `Ayia Napa`,
  `Azusa`,
  `Bad Gastein`,
  `Bad Hofgastein`,
  `Baden`,
  `Baghdad`,
  `Baiona`,
  `Bakersfield`,
  `Baku`,
  `Baltimore`,
  `Bamako`,
  `Banda Aceh`,
  `Bandar Seri Begawan`,
  `Bandol`,
  `Banff`,
  `Bangalore`,
  `Bangkok`,
  `Bangor`,
  `Bangui`,
  `Banjul`,
  `Bar`,
  `Bar Harbor`,
  `Barcelona`,
  `Bari`,
  `Barletta`,
  `Barrie`,
  `Barstow`,
  `Basel`,
  `Basey`,
  `Basseterre`,
  `Basse-Terre`,
  `Bastia`,
  `Bata`,
  `Batam`,
  `Bath`,
  `Baton Rouge`,
  `Batu`,
  `Batumi`,
  `Bayonne`,
  `Beaulieu-sur-Mer`,
  `Beaumont`,
  `Beaune`,
  `Beersheba`,
  `Beijing`,
  `Beirut`,
  `Belek`,
  `Belfast`,
  `Belfort`,
  `Belgrade`,
  `Belize City`,
  `Bellingham`,
  `Bellinzona`,
  `Belluno`,
  `Belmopan`,
  `Belo Horizonte`,
  `Bemidji`,
  `Benalmadena`,
  `Bend`,
  `Bendigo`,
  `Benevento`,
  `Benicàssim`,
  `Benidorm`,
  `Bergamo`,
  `Bergen`,
  `Bergerac`,
  `Berkeley`,
  `Berlin`,
  `Bern`,
  `Besançon`,
  `Bethlehem`,
  `Beverly Hills`,
  `Béziers`,
  `Biarritz`,
  `Biel/Bienne`,
  `Bielefeld`,
  `Biella`,
  `Bilbao`,
  `Billings`,
  `Biloxi`,
  `Birmingham (UK)`,
  `Birmingham (U.S.)`,
  `Bishkek`,
  `Bismarck`,
  `Bissau`,
  `Blanes`,
  `Bled`,
  `Blois`,
  `Bloomington`,
  `Blumenau`,
  `Boca Chica`,
  `Boca Raton`,
  `Bochum`,
  `Bodrum`,
  `Bogotá`,
  `Boise`,
  `Bologna`,
  `Bolzano`,
  `Bonifacio`,
  `Bonn`,
  `Bordeaux`,
  `Bordighera`,
  `Bormio`,
  `Boston`,
  `Boulder`,
  `Boulogne-sur-Mer`,
  `Bourges`,
  `Bowling Green`,
  `Boynton Beach`,
  `Bozeman`,
  `Bradenton`,
  `Bradford`,
  `Braga`,
  `Brampton`,
  `Brandon`,
  `Brantford`,
  `Brasilia`,
  `Bratislava`,
  `Braunschweig`,
  `Brazzaville`,
  `Breda`,
  `Bregenz`,
  `Brela`,
  `Bremen`,
  `Bremerhaven`,
  `Brescia`,
  `Brest`,
  `Briançon`,
  `Bridgeport`,
  `Bridgetown`,
  `Brighton`,
  `Brindisi`,
  `Brisbane`,
  `Bristol`,
  `Brixen`,
  `Brixental`,
  `Brno`,
  `Brookings`,
  `Brownsville`,
  `Bruges`,
  `Brunswick`,
  `Brussels`,
  `Bucharest`,
  `Budapest`,
  `Budva`,
  `Buenos Aires`,
  `Buffalo`,
  `Bujumbura`,
  `Bukittinggi`,
  `Burgas`,
  `Burlington (U.S.)`,
  `Burlington (Canada)`,
  `Burnt Pine`,
  `Butte`,
  `Cabo San Lucas`,
  `Cadaqués`,
  `Cádiz`,
  `Caen`,
  `Cagliari`,
  `Cagnes-sur-Mer`,
  `Cairns`,
  `Cairo`,
  `Cala Bona`,
  `Cala d'Or`,
  `Cala Millor`,
  `Cala Ratjada`,
  `Calais`,
  `Calella`,
  `Calgary`,
  `Cali`,
  `Caloundra`,
  `Calp`,
  `Caltanissetta`,
  `Calvi`,
  `Cambridge (UK)`,
  `Cambridge (U.S.)`,
  `Cambrils`,
  `Camden`,
  `Campbell River`,
  `Campinas`,
  `Campobasso`,
  `Can Pastilla`,
  `Can Picafort`,
  `Canazei`,
  `Canberra`,
  `Cancun`,
  `Cannes`,
  `Cannon Beach`,
  `Canterbury`,
  `Canton`,
  `Canyamel`,
  `Capdepera`,
  `Cape Canaveral`,
  `Cape Coral`,
  `Cape May`,
  `Cape Town`,
  `Capitola`,
  `Caracas`,
  `Carbonia`,
  `Carcassonne`,
  `Cardiff`,
  `Carlisle`,
  `Carlsbad`,
  `Carmel-by-the-Sea`,
  `Carpi`,
  `Carpinteria`,
  `Carrara`,
  `Carson City`,
  `Cartagena (Colombia)`,
  `Cartagena (Spain)`,
  `Casablanca`,
  `Caserta`,
  `Casper`,
  `Cassis`,
  `Castellón de la Plana`,
  `Castelrotto`,
  `Castletown`,
  `Castries`,
  `Catania`,
  `Catanzaro`,
  `Caxias do Sul`,
  `Cayenne`,
  `Cebu City`,
  `Cedar Rapids`,
  `Celle`,
  `Cervinia`,
  `Cesena`,
  `Český Krumlov`,
  `Çeşme`,
  `Chamonix`,
  `Chandler`,
  `Chania`,
  `Charleroi`,
  `Charleston (West Virginia)`,
  `Charleston (South Carolina)`,
  `Charlestown`,
  `Charlotte`,
  `Charlotte Amalie`,
  `Charlottetown`,
  `Chartres`,
  `Chatham`,
  `Chattanooga`,
  `Chelmsford`,
  `Chemnitz`,
  `Chennai`,
  `Cherbourg`,
  `Chesapeake`,
  `Chester`,
  `Cheyenne`,
  `Chiang Mai`,
  `Chiang Rai`,
  `Chiavari`,
  `Chicago`,
  `Chichester`,
  `Chiclayo`,
  `Chieti`,
  `Chincoteague`,
  `Chioggia`,
  `Chios`,
  `Chișinău`,
  `Chonburi`,
  `Christchurch`,
  `Christiansted`,
  `Chula Vista`,
  `Chur`,
  `Cincinnati`,
  `Ciutadella de Menorca`,
  `Civitavecchia`,
  `Clarksville`,
  `Clearwater`,
  `Clermont-Ferrand`,
  `Cleveland`,
  `Cockburn Town`,
  `Cocoa Beach`,
  `Coconut Creek`,
  `Coimbra`,
  `Collioure`,
  `Colmar`,
  `Cologne`,
  `Colombo`,
  `Colón`,
  `Colonia del Sacramento`,
  `Colorado Springs`,
  `Columbia (South Carolina)`,
  `Columbia (Missouri)`,
  `Columbus`,
  `Como`,
  `Conakry`,
  `Concepción`,
  `Concord`,
  `Conil de la Frontera`,
  `Conway`,
  `Copenhagen`,
  `Coral Springs`,
  `Córdoba (Argentina)`,
  `Córdoba (Spain)`,
  `Corfu`,
  `Corinth`,
  `Cork`,
  `Coro`,
  `Coron Town`,
  `Corpus Christi`,
  `Corralejo`,
  `Cortina d'Ampezzo`,
  `Cosenza`,
  `Costa Adeje`,
  `Cotabato City`,
  `Cottbus`,
  `Courchevel`,
  `Courmayeur`,
  `Courtenay`,
  `Coventry`,
  `Covington`,
  `Coxen Hole`,
  `Coyhaique`,
  `Cozumel`,
  `Crans-Montana`,
  `Cremona`,
  `Crotone`,
  `Cruz Bay`,
  `Cuenca (Ecuador)`,
  `Cuenca (Spain)`,
  `Cumaná`,
  `Cuneo`,
  `Cusco`,
  `Da Nang`,
  `Dachau`,
  `Dahab`,
  `Dakar`,
  `Dallas`,
  `Damascus`,
  `Dana Point`,
  `Dar es Salaam`,
  `Darien`,
  `Darmstadt`,
  `Darwin`,
  `Daugavpils`,
  `Dauphin Island`,
  `Davao City`,
  `Davenport`,
  `Davos`,
  `Dayton`,
  `Daytona Beach`,
  `Deauville`,
  `Decatur`,
  `Deerfield Beach`,
  `Del Mar`,
  `Delft`,
  `Delhi`,
  `Delray Beach`,
  `Den Bosch`,
  `Denia`,
  `Denpasar`,
  `Denton`,
  `Denver`,
  `Derby`,
  `Derry`,
  `Des Moines`,
  `Detroit`,
  `Dhaka`,
  `Didim`,
  `Dieppe`,
  `Dijon`,
  `Dili`,
  `Djibouti`,
  `Dodoma`,
  `Doha`,
  `Dolomiti Superski`,
  `Dordrecht`,
  `Dorfgastein`,
  `Dortmund`,
  `Dothan`,
  `Douala`,
  `Douglas`,
  `Dover (Delaware)`,
  `Dover (New Hampshire)`,
  `Dresden`,
  `Dubai`,
  `Dublin`,
  `Dubrovnik`,
  `Duisburg`,
  `Duluth`,
  `Dumaguete`,
  `Dumai`,
  `Duncan`,
  `Dundalk`,
  `Dundee`,
  `Dunedin`,
  `Dunkirk`,
  `Durham (UK)`,
  `Durham (U.S.)`,
  `Dushanbe`,
  `Düsseldorf`,
  `Eastbourne`,
  `Eau Claire`,
  `Edgartown`,
  `Edinburgh`,
  `Edmonton`,
  `Eilat`,
  `Eindhoven`,
  `El Nido`,
  `El Paso`,
  `Elche`,
  `Elizabeth`,
  `Elko`,
  `Ellmau`,
  `Elm`,
  `Empuriabrava`,
  `Encinitas`,
  `Engelberg`,
  `Enna`,
  `Enschede`,
  `Épinal`,
  `Erfurt`,
  `Erie`,
  `Erlangen`,
  `Esbjerg`,
  `Espace Killy`,
  `Essaouira`,
  `Essen`,
  `Estepona`,
  `Eugene`,
  `Eureka`,
  `Evansville`,
  `Everett`,
  `Exeter`,
  `Èze`,
  `Faenza`,
  `Fairbanks`,
  `Fakaofo`,
  `Falmouth`,
  `Famagusta`,
  `Fano`,
  `Fargo`,
  `Faro`,
  `Fayetteville (North Carolina)`,
  `Fayetteville (Arkansas)`,
  `Fermo`,
  `Fernandina Beach`,
  `Ferrara`,
  `Fethiye`,
  `Fez`,
  `Fieberbrunn`,
  `Filzmoos`,
  `Finale Ligure`,
  `Fiumicino`,
  `Flagstaff`,
  `Flaine`,
  `Flint`,
  `Florence`,
  `Florence (Alabama)`,
  `Flores`,
  `Foggia`,
  `Folgarida`,
  `Fontana`,
  `Forlì`,
  `Fort Collins`,
  `Fort Lauderdale`,
  `Fort Myers`,
  `Fort Smith`,
  `Fort Wayne`,
  `Fort Worth`,
  `Fort-de-France`,
  `Forte dei Marmi`,
  `Foz do Iguaçu`,
  `Frankfort`,
  `Frankfurt am Main`,
  `Franklin`,
  `Frederick`,
  `Fredericton`,
  `Frederiksted`,
  `Freeport`,
  `Freetown`,
  `Freiburg`,
  `Fremont`,
  `Fresno`,
  `Fribourg`,
  `Frosinone`,
  `Fuengirola`,
  `Fujairah`,
  `Fukuoka`,
  `Funafuti`,
  `Funchal`,
  `Gaborone`,
  `Gainesville`,
  `Galtür`,
  `Galway`,
  `Gandia`,
  `Garden Grove`,
  `Garland`,
  `Gastonia`,
  `Gatineau`,
  `Gaza City`,
  `Gdansk`,
  `Gdynia`,
  `Geelong`,
  `Gelsenkirchen`,
  `Geneva`,
  `Genoa`,
  `George Town (Cayman Islands)`,
  `George Town (Malaysia)`,
  `Georgetown`,
  `Ghent`,
  `Gijón`,
  `Gilbert`,
  `Girona`,
  `Gitega`,
  `Giza`,
  `Glasgow`,
  `Glendale (Arizona)`,
  `Glendale (California)`,
  `Gloucester`,
  `Gold Coast`,
  `Gorizia`,
  `Dachstein-West`,
  `Gothenburg`,
  `Göttingen`,
  `Gouda`,
  `Granada (Spain)`,
  `Granada (Nicaragua)`,
  `Grand Forks`,
  `Grand Island`,
  `Grand Junction`,
  `Grand Prairie`,
  `Grand Rapids`,
  `Grande Prairie`,
  `Granville`,
  `Grasse`,
  `Graz`,
  `Great Falls`,
  `Greeley`,
  `Green Bay`,
  `Greensboro`,
  `Greenville NC`,
  `Greenville SC`,
  `Grenoble`,
  `Grindelwald`,
  `Groningen`,
  `Grossarl`,
  `Grosseto`,
  `Grover Beach`,
  `Gstaad`,
  `Guadalajara`,
  `Guadalupe`,
  `Guangzhou`,
  `Guatemala City`,
  `Guayaquil`,
  `Guelph`,
  `Guimarães`,
  `Gulf Shores`,
  `Gulfport`,
  `Gustavia`,
  `Haarlem`,
  `Haifa`,
  `Half Moon Bay`,
  `Halifax`,
  `Halle`,
  `Hamburg`,
  `Hamilton (Bermuda)`,
  `Hamilton (Canada)`,
  `Hamilton (New Zealand)`,
  `Hampton`,
  `Hanford`,
  `Hangzhou`,
  `Hannover`,
  `Hanoi`,
  `Harare`,
  `Hargeisa`,
  `Harrisburg`,
  `Hartford`,
  `Hasselt`,
  `Hastings`,
  `Hat Yai`,
  `Hattiesburg`,
  `Havana`,
  `Heidelberg`,
  `Heilbronn`,
  `Heiligenblut`,
  `Helena`,
  `Helsinki`,
  `Henderson`,
  `Heraklion`,
  `Herceg Novi`,
  `Hereford`,
  `Hermosa Beach`,
  `Hervey Bay`,
  `Hialeah`,
  `Hillsboro`,
  `Hinterglemm`,
  `Hinterstoder`,
  `Hiroshima`,
  `Hoi An`,
  `Hobart`,
  `Ho Chi Minh City`,
  `Holbrook`,
  `Hollywood (Florida)`,
  `Honfleur`,
  `Hong Kong`,
  `Honiara`,
  `Honolulu`,
  `Horsens`,
  `Hot Springs`,
  `Houston`,
  `Hua Hin`,
  `Hue`,
  `Huntington`,
  `Huntington Beach`,
  `Huntsville`,
  `Hurghada`,
  `Hvar`,
  `Hyères`,
  `Ibiza Town`,
  `Iloilo City`,
  `Imola`,
  `Imperia`,
  `Inca`,
  `Indianapolis`,
  `Ingolstadt`,
  `Innsbruck`,
  `Interlaken`,
  `Inverness`,
  `Ioannina`,
  `Iqaluit`,
  `Iquitos`,
  `Irvine`,
  `Irving`,
  `Ischgl`,
  `Isernia`,
  `Lahore`,
  `Islamorada`,
  `Istanbul`,
  `İzmir`,
  `Izola`,
  `Jackson`,
  `Jackson (Tennessee)`,
  `Jacksonville`,
  `Jaipur`,
  `Jakarta`,
  `Jekyll Island`,
  `Jefferson City`,
  `Jena`,
  `Jerez de la Frontera`,
  `Jersey City`,
  `Jerusalem`,
  `Johannesburg`,
  `Johnson City`,
  `Joinville`,
  `Jonesboro`,
  `Juan Griego`,
  `Juan-les-Pins`,
  `Juba`,
  `Juiz de Fora`,
  `Juneau`,
  `Jungfrau`,
  `Jupiter`,
  `Jūrmala`,
  ``,
  `Kabul`,
  `Kaiserslautern`,
  `Kalamata`,
  `Kalamazoo`,
  `Kamloops`,
  `Kampala`,
  `Kanchanaburi`,
  `Kansas City`,
  `Kansas City (Kansas)`,
  `Kappl`,
  `Kaprun`,
  `Islamabad`,
  `Karlovy Vary`,
  `Karlsruhe`,
  `Kassel`,
  `Kastoria`,
  `Kathmandu`,
  `Kaunas`,
  `Kavala`,
  `Kearney`,
  `Keene`,
  `Kelowna`,
  `Kemer`,
  `Kenosha`,
  `Key Largo`,
  `Key West`,
  `Khao Lak`,
  `Khartoum`,
  `Kiel`,
  `Kigali`,
  `Kilkenny`,
  `Kingman`,
  `Kingston (Jamaica)`,
  `Kingston (Norfolk Island)`,
  `Kingston (Canada)`,
  `Kingston upon Hull`,
  `Kingstown`,
  `Kinshasa`,
  `Kissimmee`,
  `Kitchener`,
  `Kitzbühel`,
  `Klagenfurt`,
  `Klaipėda`,
  `Knoxville`,
  `Kobe`,
  `Koblenz`,
  `Kolding`,
  `Kolkata`,
  `Komotini`,
  `Koper`,
  `Koror`,
  `Kos`,
  `Košice`,
  `Kotor`,
  `Krabi`,
  `Krakow`,
  `Kralendijk`,
  `Krefeld`,
  `Kuah`,
  `Kuala Lumpur`,
  `Kuşadası`,
  `Kuta`,
  `Kutná Hora`,
  `Kuwait City`,
  `Kyiv`,
  `Kyoto`,
  `Kyrenia`,
  `La Ceiba`,
  `La Ciotat`,
  `La Clusaz`,
  `La Laguna`,
  `La Maddalena`,
  `La Manga`,
  `La Paz`,
  `La Plagne`,
  `La Plata`,
  `La Rochelle`,
  `La Romana`,
  `La Serena`,
  `La Seyne-sur-Mer`,
  `La Spezia`,
  `La Thuile`,
  `Laax`,
  `Labasa`,
  `Labrador City`,
  `Labuan Bajo`,
  `Ladysmith`,
  `Lafayette (Indiana)`,
  `Lafayette (Louisiana)`,
  `Lagos (Nigeria)`,
  `Lagos (Portugal)`,
  `Laguna Beach`,
  `Karachi`,
  `Lakeland`,
  `Lalitpur`,
  `Lamezia Terme`,
  `Lancaster`,
  `Lancaster (U.S.)`,
  `Landshut`,
  `Lansing`,
  `L'Aquila`,
  `Laredo`,
  `Largo`,
  `Larnaca`,
  `Las Cruces`,
  `Las Palmas`,
  `Las Vegas`,
  `Latina`,
  `Lausanne`,
  `Lautoka`,
  `Laval`,
  `Lawton`,
  `Layton`,
  `Le Havre`,
  `Le Lavandou`,
  `Le Mans`,
  `Le Puy-en-Velay`,
  `Lecce`,
  `Lecco`,
  `Lech`,
  `Leeds`,
  `Legian`,
  `Legnano`,
  `Leicester`,
  `Leiden`,
  `Leipzig`,
  `Lemgo`,
  `Leogang`,
  `León`,
  `Les Arcs`,
  `Les Deux Alpes`,
  `Les Gets`,
  `Les Houches`,
  `Les Menuires`,
  `Lethbridge`,
  `Leuven`,
  `Leverkusen`,
  `Lexington`,
  `Liberec`,
  `Libreville`,
  `Lichfield`,
  `Liège`,
  `Lienz`,
  `Liepāja`,
  `Lille`,
  `Lilongwe`,
  `Lima`,
  `Limassol`,
  `Limerick`,
  `Limoges`,
  `Lincoln`,
  `Lincoln`,
  `Lindos`,
  `Linz`,
  `Lisbon`,
  `Lisburn`,
  `Little Rock`,
  `Liverpool`,
  `Livigno`,
  `Livorno`,
  `Ljubljana`,
  `Lloret de Mar`,
  `Llucmajor`,
  `Loano`,
  `Locarno`,
  `Lodi`,
  `Lodz`,
  `Logan`,
  `Logroño`,
  `Lomé`,
  `London (Canada)`,
  `London (UK)`,
  `Londrina`,
  `Long Beach`,
  `Long Beach (New York)`,
  `Long Branch`,
  `Longview (Texas)`,
  `Longview (Washington)`,
  `Lorain`,
  `Los Alamos`,
  `Los Angeles`,
  `Los Cabos`,
  `Los Cristianos`,
  `Louisville`,
  `Lourdes`,
  `Loutraki`,
  `Louvain-la-Neuve`,
  `Lowell`,
  `Luanda`,
  `Lubbock`,
  `Lübeck`,
  `Lublin`,
  `Lucca`,
  `Lucerne`,
  `Lugano`,
  `Luganville`,
  `Lund`,
  `Lusaka`,
  `Luxembourg`,
  `Luxor`,
  `Lyon`,
  `Maastricht`,
  `Macerata`,
  `Machu Picchu`,
  `Macon`,
  `Madera`,
  `Madison`,
  `Madonna di Campiglio`,
  `Madrid`,
  `Magaluf`,
  `Magdeburg`,
  `Mahón`,
  `Mainz`,
  `Majuro`,
  `Makarska`,
  `Malabo`,
  `Malaga`,
  `Malang`,
  `Maldonado`,
  `Malé`,
  `Malia`,
  `Malibu`,
  `Malmö`,
  `Manacor`,
  `Manado`,
  `Managua`,
  `Manama`,
  `Manchester (UK)`,
  `Manchester (U.S.)`,
  `Máncora`,
  `Mandalika`,
  `Manhattan Beach`,
  `Manhattan, KS`,
  `Manila`,
  `Mannheim`,
  `Manosque`,
  `Mantua`,
  `Maputo`,
  `Mar del Plata`,
  `Maracaibo`,
  `Marathon`,
  `Marbella`,
  `Maria Alm`,
  `Maribor`,
  `Marigot`,
  `Markham`,
  `Marmaris`,
  `Maroochydore`,
  `Marquette`,
  `Marrakesh`,
  `Marsa Alam`,
  `Marsala`,
  `Marseille`,
  `Martigues`,
  `Masaya`,
  `Maseru`,
  `Maspalomas`,
  `Massa`,
  `Mataram`,
  `Matera`,
  `Mayrhofen`,
  `Mazara del Vallo`,
  `Mbabane`,
  `McKinney`,
  `Mechelen`,
  `Medan`,
  `Medellín`,
  `Medford`,
  `Megève`,
  `Melbourne (Australia)`,
  `Melbourne (U.S.)`,
  `Memphis`,
  `Menton`,
  `Merano`,
  `Merced`,
  `Meribel`,
  `Mérida (Spain)`,
  `Mérida (Venezuela)`,
  `Meridian`,
  `Mesa`,
  `Messina`,
  `Mestre`,
  `Metz`,
  `Mexico City`,
  `Miami`,
  `Middelburg`,
  `Midland`,
  `Mijas`,
  `Milan`,
  `Milford`,
  `Millau`,
  `Milwaukee`,
  `Mindelo`,
  `Minneapolis`,
  `Minot`,
  `Minsk`,
  `Miramar`,
  `Mishawaka`,
  `Mississauga`,
  `Missoula`,
  `Moab`,
  `Mobile`,
  `Modena`,
  `Modesto`,
  `Modica`,
  `Moena`,
  `Mogadishu`,
  `Mogi das Cruzes`,
  `Mombasa`,
  `Monaco City`,
  `Mönchengladbach`,
  `Moncton`,
  `Monrovia (Liberia)`,
  `Monrovia (U.S.)`,
  `Mons`,
  `Monschau`,
  `Monte Carlo`,
  `Monte Rosa`,
  `Montego Bay`,
  `Montepulciano`,
  `Monterey`,
  `Montevideo`,
  `Montgomery`,
  `Montluçon`,
  `Montpelier`,
  `Montpellier`,
  `Montreal`,
  `Montreux`,
  `Monza`,
  `Moose Jaw`,
  `Moraira`,
  `Moreno Valley`,
  `Morgantown`,
  `Moroni`,
  `Morro Bay`,
  `Morzine`,
  `Moscow`,
  `Mount Vernon`,
  `Mountain View`,
  `Moutier`,
  `Mulhouse`,
  `Mumbai`,
  `Munich`,
  `Münster`,
  `Murcia`,
  `Murfreesboro`,
  `Murter`,
  `Mykonos`,
  `Mytilene`,
  `Nadi`,
  `Nafplio`,
  `Nagoya`,
  `Nags Head`,
  `Nairobi`,
  `Namur`,
  `Nanaimo`,
  `Nancy`,
  `Nantes`,
  `Napa`,
  `Naples (Italy)`,
  `Naples (U.S.)`,
  `Narbonne`,
  `Narva`,
  `Nashua`,
  `Nashville`,
  `Nassau`,
  `Naxos`,
  `Nazareth`,
  `N'Djamena`,
  `Negril`,
  `Neiafu`,
  `Nelson`,
  `Nerja`,
  `Netanya`,
  `Nevers`,
  `New Haven`,
  `New London`,
  `New Orleans`,
  `New Smyrna Beach`,
  `New York City`,
  `Newark`,
  `Newcastle (Australia)`,
  `Newcastle (UK)`,
  `Newport (UK)`,
  `Newport (Rhode Island)`,
  `Newport (Vermont)`,
  `Newport Beach`,
  `Newport News`,
  `Newry`,
  `Ngerulmud`,
  `Nha Trang`,
  `Niagara Falls (U.S.)`,
  `Niagara Falls (Canada)`,
  `Niamey`,
  `Nice`,
  `Nicosia`,
  `Nijmegen`,
  `Nimes`,
  `Niort`,
  `Noosa Heads`,
  `Norfolk`,
  `Normal`,
  `Norman`,
  `North Las Vegas`,
  `North Port`,
  `Norwalk`,
  `Norwich`,
  `Nottingham`,
  `Nouakchott`,
  `Novara`,
  `Novigrad`,
  `Nukuʻalofa`,
  `Nukunonu`,
  `Nuoro`,
  `Nürnberg`,
  `Nur-Sultan`,
  `Nusa Dua`,
  `Nuuk`,
  `Nyon`,
  `Oakland`,
  `Oakville`,
  `Oaxaca`,
  `Obergurgl`,
  `Oberhausen`,
  `Ocala`,
  `Ocean City`,
  `Ocean Grove`,
  `Oceanside`,
  `Ocho Rios`,
  `Odense`,
  `Odessa`,
  `Ogden`,
  `Oia`,
  `Oklahoma City`,
  `Olbia`,
  `Oldenburg`,
  `Olomouc`,
  `Olympia`,
  `Omaha`,
  `Omoa`,
  `Opatija`,
  `Orange Beach`,
  `Oranjestad (Aruba)`,
  `Oranjestad (Sint Eustatius)`,
  `Orem`,
  `Oristano`,
  `Orlando`,
  `Orléans`,
  `Ortisei`,
  `Osaka`,
  `Oshawa`,
  `Oshkosh`,
  `Oslo`,
  `Osnabrück`,
  `Ostrava`,
  `Ottawa`,
  `Ouagadougou`,
  `Oulu`,
  `Ourense`,
  `Overland Park`,
  `Oviedo`,
  `Owensboro`,
  `Oxford`,
  `Oxnard`,
  `Pacific Grove`,
  `Padang`,
  `Paderborn`,
  `Padova`,
  `Pago Pago`,
  `Palanga`,
  `Palavas-les-Flots`,
  `Palembang`,
  `Palermo`,
  `Palikir`,
  `Palm Bay`,
  `Palm Beach`,
  `Palm Springs`,
  `Palma de Mallorca`,
  `Palma Nova`,
  `Palmetto`,
  `Palo Alto`,
  `Pamplona`,
  `Panama City (U.S.)`,
  `Panama City (Panama)`,
  `Paphos`,
  `Paradiski`,
  `Paralia`,
  `Paramaribo`,
  `Parikia`,
  `Paris`,
  `Parkersburg`,
  `Parksville`,
  `Parma`,
  `Pärnu`,
  `Pasadena`,
  `Passo del Tonale`,
  `Passo Rolle`,
  `Paterson`,
  `Patras`,
  `Pattaya`,
  `Pau`,
  `Pavia`,
  `Peel`,
  `Peguera`,
  `Pembroke Pines`,
  `Peniscola`,
  `Pensacola`,
  `Peoria`,
  `Perast`,
  `Périgueux`,
  `Perpignan`,
  `Perros-Guirec`,
  `Perth (Australia)`,
  `Perth (UK)`,
  `Perugia`,
  `Pesaro`,
  `Pescara`,
  `Pescasseroli`,
  `Petah Tikva`,
  `Peterborough`,
  `Petra`,
  `Petrovac`,
  `Pforzheim`,
  `Phang Nga`,
  `Phetchabun`,
  `Philadelphia`,
  `Philipsburg`,
  `Phoenix`,
  `Phuket City`,
  `Piacenza`,
  `Pierre`,
  `Pine Bluff`,
  `Piraeus`,
  `Piran`,
  `Pisa`,
  `Pistoia`,
  `Pittsburgh`,
  `Placencia`,
  `Plano`,
  `Playa Blanca`,
  `Playa de las Américas`,
  `Playa del Carmen`,
  `Pleasure Point`,
  `Plovdiv`,
  `Plymouth`,
  `Plzeň`,
  `Podgorica`,
  `Pointe-à-Pitre`,
  `Poitiers`,
  `Pollença`,
  `Pompano Beach`,
  `Pontevedra`,
  `Pordenone`,
  `Poreč`,
  `Porlamar`,
  `Port Alberni`,
  `Port Angeles`,
  `Port Charlotte`,
  `Port d'Andratx`,
  `Port Louis`,
  `Port Moresby`,
  `Port of Spain`,
  `Port St. Lucie`,
  `Port Townsend`,
  `Port Vila`,
  `Port-au-Prince`,
  `Portimão`,
  `Portland (Oregon)`,
  `Portland (Maine)`,
  `Porto`,
  `Porto Cervo`,
  `Porto Cristo`,
  `Porto Torres`,
  `Portocolom`,
  `Portoferraio`,
  `Portofino`,
  `Porto-Novo`,
  `Portorož`,
  `Porto-Vecchio`,
  `Portsmouth (UK)`,
  `Portsmouth (U.S.)`,
  `Positano`,
  `Potenza`,
  `Potsdam`,
  `Poznan`,
  `Pozzuoli`,
  `Prague`,
  `Praia`,
  `Praia da Rocha`,
  `Prato`,
  `Prescott`,
  `Preston`,
  `Pretoria`,
  `Prince Albert`,
  `Prince George`,
  `Prince Rupert`,
  `Pristina`,
  `Propriano`,
  `Protaras`,
  `Providence`,
  `Provincetown`,
  `Provo`,
  `Pueblo`,
  `Puerto Baquerizo Moreno`,
  `Puerto Cortés`,
  `Puerto de la Cruz`,
  `Puerto la Cruz`,
  `Puerto Plata`,
  `Puerto Princesa`,
  `Puerto Rico de Gran Canaria`,
  `Puerto Vallarta`,
  `Pula`,
  `Punta Arenas`,
  `Punta Cana`,
  `Punta del Este`,
  `Punta Gorda`,
  `Pyeongchang`,
  `Pyongyang`,
  `Quarteira`,
  `Quebec`,
  `Quetzaltenango`,
  `Quezon City`,
  `Quimper`,
  `Quito`,
  `Rabat`,
  `Racine`,
  `Ragusa`,
  `Railay Beach`,
  `Raleigh`,
  `Ramallah`,
  `Ramsey`,
  `Rancho Cucamonga`,
  `Randers`,
  `Rapallo`,
  `Rapid City`,
  `Ras al-Khaimah`,
  `Ras Sedr`,
  `Ratingen`,
  `Ravello`,
  `Ravenna`,
  `Rayong`,
  `Reading`,
  `Red Deer`,
  `Redding`,
  `Redondo Beach`,
  `Regensburg`,
  `Reggio Calabria`,
  `Reggio Emilia`,
  `Regina`,
  `Rehovot`,
  `Reims`,
  `Rennes`,
  `Reno`,
  `Rethymno`,
  `Reus`,
  `Reutlingen`,
  `Reykjavik`,
  `Rhodes`,
  `Richmond`,
  `Rieti`,
  `Riga`,
  `Rijeka`,
  `Rimini`,
  `Rio de Janeiro`,
  `Riomaggiore`,
  `Rishon LeZion`,
  `Rivas`,
  `Riverside`,
  `Riviera Maya`,
  `Road Town`,
  `Roanoke`,
  `Rocamadour`,
  `Rochester (Minnesota)`,
  `Rochester (New York)`,
  `Rock Hill`,
  `Rockford`,
  `Rockville`,
  `Rodez`,
  `Rogers`,
  `Rome`,
  `Ronda`,
  `Rosario`,
  `Roseau`,
  `Roskilde`,
  `Rostock`,
  `Roswell`,
  `Rotterdam`,
  `Roubaix`,
  `Rouen`,
  `Rovigo`,
  `Rovinj`,
  `Rutland`,
  `Sa Coma`,
  `Sa Pobla`,
  `Saalbach`,
  `Saarbrücken`,
  `Saas-Fee`,
  `Sacramento`,
  `Safaga`,
  `Saguenay`,
  `Saint John`,
  `Saint Paul`,
  `Saint Petersburg`,
  `Saint-Brieuc`,
  `Sainte-Maxime`,
  `Saintes-Maries-de-la-Mer`,
  `Saint-Étienne`,
  `Saint-Jean-Cap-Ferrat`,
  `Saint-Jean-sur-Richelieu`,
  `Saint-Jérôme`,
  `Saint-Laurent-du-Maroni`,
  `Saint-Malo`,
  `Saint-Tropez`,
  `Salamanca`,
  `Salem (Oregon)`,
  `Salem (Massachusetts)`,
  `Salerno`,
  `Salinas`,
  `Salisbury`,
  `Salou`,
  `Salt Lake City`,
  `Salta`,
  `Salvador`,
  `Salzburg`,
  `Samaná`,
  `San Angelo`,
  `San Antonio`,
  `San Bernardino`,
  `San Clemente`,
  `San Cristóbal`,
  `San Diego`,
  `San Fernando`,
  `San Francisco`,
  `San José (Costa Rica)`,
  `San Jose (U.S.)`,
  `San Juan`,
  `San Juan del Sur`,
  `San Lorenzo`,
  `San Luis Obispo`,
  `San Marino`,
  `San Mateo`,
  `San Miguel`,
  `San Pedro`,
  `San Pedro de Atacama`,
  `San Pedro Sula`,
  `San Rafael`,
  `San Salvador`,
  `San Sebastián`,
  `Sanaa`,
  `Sanford`,
  `Sanremo`,
  `Sant Antoni de Portmany`,
  `Santa Ana (U.S.)`,
  `Santa Ana (El Salvador)`,
  `Santa Barbara`,
  `Santa Clara`,
  `Santa Clarita`,
  `Santa Cruz`,
  `Santa Cruz de la Sierra`,
  `Santa Cruz de Tenerife`,
  `Santa Eulària des Riu`,
  `Santa Fe`,
  `Santa Lucía`,
  `Santa Margherita Ligure`,
  `Santa Maria (Cape Verde)`,
  `Santa Maria (U.S.)`,
  `Santa Monica`,
  `Santa Pola`,
  `Santa Ponsa`,
  `Santa Rosa`,
  `Santa Tecla`,
  `Santander`,
  `Santanyí`,
  `Santiago (Chile)`,
  `Santiago (Dominican Rep.)`,
  `Santiago de Compostela`,
  `Santo Domingo`,
  `Sanur`,
  `Sao Paulo`,
  `São Tomé`,
  `Sapporo`,
  `Sarajevo`,
  `Sarasota`,
  `Saratoga Springs`,
  `S'Arenal`,
  `Sariaya`,
  `Sarlat-la-Canéda`,
  `Saskatoon`,
  `Sassari`,
  `Sault Ste. Marie`,
  `Saumur`,
  `Savannah`,
  `Savona`,
  `Savusavu`,
  `Schaffhausen`,
  `Schenectady`,
  `Schladming`,
  `Scottsdale`,
  `Scranton`,
  `Sea Island`,
  `Sea Isle City`,
  `Seal Beach`,
  `Seaside`,
  `Seattle`,
  `Sedona`,
  `Seefeld`,
  `Segovia`,
  `Semarang`,
  `Seminyak`,
  `Seoul`,
  `Serre Chevalier`,
  `Sète`,
  `Seville`,
  `Shanghai`,
  `Sharjah`,
  `Sharm el-Sheikh`,
  `Sheffield`,
  `Shenzhen`,
  `Sherbrooke`,
  `Shreveport`,
  `Šiauliai`,
  `Šibenik`,
  `Side`,
  `Siegen`,
  `Siena`,
  `Sineu`,
  `Singapore`,
  `Singaraja`,
  `Sion`,
  `Sioux City`,
  `Sioux Falls`,
  `Sitges`,
  `Skiathos`,
  `Skopje`,
  `Sofia`,
  `Sölden`,
  `Söll`,
  `Soller`,
  `Solothurn`,
  `Sondrio`,
  `Sopot`,
  `Sorocaba`,
  `Sorrento`,
  `South Bend`,
  `Southampton`,
  `Split`,
  `Spokane`,
  `Springdale`,
  `Springfield (Illinois)`,
  `Springfield (Massachusetts)`,
  `Springfield (Missouri)`,
  `Springfield (Oregon)`,
  `St Albans`,
  `St George's (Bermuda)`,
  `St. Albans`,
  `St. Anton`,
  `St. Augustine`,
  `St. Catharines`,
  `St. Cloud`,
  `St. Gallen`,
  `St. George`,
  `St. George's (Grenada)`,
  `St. John's (Antigua and Barbuda)`,
  `St. John's (Canada)`,
  `St. Louis`,
  `St. Moritz`,
  `St. Petersburg (U.S.)`,
  `St. Simons Island`,
  `Stamford`,
  `Stanley`,
  `Stavanger`,
  `Steinbach`,
  `Stillwater`,
  `Stirling`,
  `Stockholm`,
  `Stockton`,
  `Stoke-on-Trent`,
  `Stone Harbor`,
  `Strasbourg`,
  `Stuttgart`,
  `Sucre`,
  `Sudbury`,
  `Suez`,
  `Sukhothai`,
  `Sukhumi`,
  `Summerside`,
  `Sumter`,
  `Sunderland`,
  `Sunnyvale`,
  `Sunshine Coast`,
  `Superior`,
  `Surabaya`,
  `Surrey`,
  `Suva`,
  `Sveti Stefan`,
  `Swansea`,
  `Sydney (Australia)`,
  `Sydney (Canada)`,
  `Syracuse (Italy)`,
  `Syracuse (U.S.)`,
  `Szczecin`,
  `Taba`,
  `Tacloban`,
  `Tacoma`,
  `Tagbilaran`,
  `Taipei`,
  `Tallahassee`,
  `Tallinn`,
  `Tampa`,
  `Tampere`,
  `Tamworth`,
  `Tangier`,
  `Taormina`,
  `Taranto`,
  `Tarifa`,
  `Tarragona`,
  `Tartu`,
  `Tashkent`,
  `Tauplitz`,
  `Tauranga`,
  `Tavira`,
  `Tbilisi`,
  `Tegucigalpa`,
  `Tel Aviv`,
  `Temecula`,
  `Tempe`,
  `Teramo`,
  `Ternate`,
  `Terni`,
  `Texarkana AR`,
  `Texarkana TX`,
  `The Bottom`,
  `The Hague`,
  `The Valley`,
  `The Woodlands`,
  `Thessaloniki`,
  `Thimphu`,
  `Thunder Bay`,
  `Tignes`,
  `Tijuana`,
  `Tilburg`,
  `Timmins`,
  `Tinos`,
  `Tirana`,
  `Tivat`,
  `Tivoli`,
  `Tokyo`,
  `Toledo (Spain)`,
  `Toledo (U.S.)`,
  `Tooele`,
  `Toowoomba`,
  `Topeka`,
  `Toronto`,
  `Torre del Greco`,
  `Torre del Mar`,
  `Torremolinos`,
  `Torrevieja`,
  `Tórshavn`,
  `Toruń`,
  `Tossa de Mar`,
  `Toulon`,
  `Toulouse`,
  `Tours`,
  `Townsville`,
  `Trani`,
  `Trapani`,
  `Trento`,
  `Trenton`,
  `Treviso`,
  `Trier`,
  `Trieste`,
  `Tripoli`,
  `Trogir`,
  `Trois-Rivières`,
  `Tromsø`,
  `Trondheim`,
  `Trouville-sur-Mer`,
  `Troy`,
  `Troyes`,
  `Trujillo`,
  `Tucson`,
  `Tui`,
  `Tulsa`,
  `Tulum`,
  `Turin`,
  `Turku`,
  `Tuscaloosa`,
  `Twin Falls`,
  `Two Harbors`,
  `Tybee Island`,
  `Tyler`,
  `Ubud`,
  `Udine`,
  `Udon Thani`,
  `Ukiah`,
  `Ulaanbaatar`,
  `Ulcinj`,
  `Ulm`,
  `Umag`,
  `Uppsala`,
  `Urbino`,
  `Urubamba`,
  `Ushuaia`,
  `Utica`,
  `Utrecht`,
  `Vaduz`,
  `Val d’Isère`,
  `Val di Fassa`,
  `Val Gardena`,
  `Val Thorens`,
  `Valence`,
  `Valencia (Spain)`,
  `Valencia (Venezuela)`,
  `Valladolid`,
  `Valldemossa`,
  `Valle Isarco`,
  `Valletta`,
  `Valparaíso`,
  `Vancouver (Canada)`,
  `Vancouver (U.S.)`,
  `Varazze`,
  `Varese`,
  `Varna`,
  `Vaughan`,
  `Vejle`,
  `Venice (Italy)`,
  `Venice (U.S.)`,
  `Ventimiglia`,
  `Ventspils`,
  `Ventura`,
  `Verbania`,
  `Verbier`,
  `Vercelli`,
  `Vero Beach`,
  `Verona`,
  `Versailles`,
  `Vevey`,
  `Viareggio`,
  `Vibo Valentia`,
  `Viborg`,
  `Vicenza`,
  `Vichy`,
  `Victoria (Canada)`,
  `Victoria (Seychelles)`,
  `Victorville`,
  `Vienna`,
  `Vigan`,
  `Vigo`,
  `Vilamoura`,
  `Villach`,
  `Villefranche-sur-Mer`,
  `Vilnius`,
  `Viña del Mar`,
  `Virginia Beach`,
  `Visalia`,
  `Viterbo`,
  `Vitoria-Gasteiz`,
  `Volos`,
  `Vrsar`,
  `Waco`,
  `Wakefield`,
  `Warsaw`,
  `Warth`,
  `Washington D.C.`,
  `Waterford`,
  `Watertown`,
  `Watsonville`,
  `Waukegan`,
  `Waukesha`,
  `Wellington (New Zealand)`,
  `Wellington (U.S.)`,
  `Wengen`,
  `Weno`,
  `West Lafayette`,
  `West Palm Beach`,
  `Westendorf`,
  `Westminster`,
  `Weston`,
  `Wheeling`,
  `White Plains`,
  `Whitehorse`,
  `Wichita`,
  `Wichita Falls`,
  `Wiesbaden`,
  `Wildwood`,
  `Wilkes-Barre`,
  `Willemstad`,
  `Williams`,
  `Wilmington (Delaware)`,
  `Wilmington (North Carolina)`,
  `Winchester`,
  `Windhoek`,
  `Windsor`,
  `Winnipeg`,
  `Winslow`,
  `Winston–Salem`,
  `Winterthur`,
  `Wolfsburg`,
  `Wollongong`,
  `Wolverhampton`,
  `Woodburn`,
  `Worcester (UK)`,
  `Worcester (U.S.)`,
  `Worthing`,
  `Wroclaw`,
  `Wuppertal`,
  `Würzburg`,
  `Yakima`,
  `Yamoussoukro`,
  `Yaoundé`,
  `Yaren`,
  `Yellowknife`,
  `Yerevan`,
  `Yogyakarta`,
  `Yokohama`,
  `Yonkers`,
  `York (UK)`,
  `York (U.S.)`,
  `Youngstown`,
  `Yuma`,
  `Zadar`,
  `Zagreb`,
  `Zakopane`,
  `Zamboanga City`,
  `Zanzibar`,
  `Zaragoza`,
  `Zell am See`,
  `Zell am Ziller`,
  `Zermatt`,
  `Zug`,
  `Zurich`,
  `Zwickau`,
  `Zwolle`,
];

export const city = cities.map((option) => option.split(" ")[0]);
export const UNIQUE_CITIES = [...new Set(city)];
