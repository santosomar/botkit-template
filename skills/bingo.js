//
// Command: bingo - this is the corporate bullshit bingo card generator
//

//note this will be async


module.exports = function (controller) {

    controller.hears([/^bingo$/], 'direct_message,direct_mention', function (bot, message) {

      var textArray = [
        'appropriately',
        'assertively',
        'authoritatively',
        'collaboratively',
        'compellingly',
        'competently',
        'completely',
        'completely',
        'continually',
        'malicious',
        'cyber',
        'cyber war',
        'cyber range',
        'the cyber',
        'threat actor',
        'remediation',
        'quarantine',
        'trustsec',
        'digitize security',
        'branded vulnerability',
        'cyber espionage',
        'conveniently',
        'credibly',
        'distinctively',
        'dramatically',
        'dynamically',
        'efficiently',
        'energistically',
        'enthusiastically',
        'fungibly',
        'globally',
        'holisticly',
        'interactively',
        'intrinsically',
        'monotonectally',
        'objectively',
        'phosfluorescently',
        'proactively',
        'professionally',
        'progressively',
        'quickly',
        'rapidiously',
        'seamlessly',
        'synergistically',
        'uniquely',
        'actualize',
        'administrate',
        'aggregate',
        'architect',
        'benchmark',
        'brand',
        'build',
        'cloudify',
        'communicate',
        'conceptualize',
        'coordinate',
        'create',
        'cultivate',
        'customize',
        'deliver',
        'deploy',
        'develop',
        'disseminate',
        'drive',
        'embrace',
        'e-enable',
        'empower',
        'enable',
        'engage',
        'engineer',
        'enhance',
        'envisioneer',
        'evisculate',
        'evolve',
        'expedite',
        'exploit',
        'extend',
        'fabricate',
        'facilitate',
        'fashion',
        'formulate',
        'foster',
        'generate',
        'grow',
        'harness',
        'impact',
        'implement',
        'incentivize',
        'incubate',
        'initiate',
        'innovate',
        'integrate',
        'iterate',
        'leverage',
        'maintain',
        'matrix',
        'maximize',
        'mesh',
        'monetize',
        'morph',
        'myocardinate',
        'negotiate',
        'network',
        'optimize',
        'orchestrate',
        'parallel task',
        'plagiarize',
        'pontificate',
        'predominate',
        'procrastinate',
        'productivate',
        'productize',
        'promote',
        'provide access to',
        'pursue',
        'recaptiualize',
        'reconceptualize',
        'redefine',
        're-engineer',
        'reintermediate',
        'reinvent',
        'repurpose',
        'restore',
        'revolutionize',
        'right-shore',
        'scale',
        'seize',
        'simplify',
        'strategize',
        'streamline',
        'supply',
        'syndicate',
        'synergize',
        'synthesize',
        'target',
        'transform',
        'transition',
        'underwhelm',
        'unleash',
        'utilize',
        'visualize',
        'whiteboard',
        '24 7',
        '24 365',
        'accurate',
        'adaptive',
        'agile',
        'alternative',
        'an expanded array of',
        'B2B',
        'B2C',
        'backend',
        'backward-compatible',
        'best-of-breed',
        'bleeding-edge',
        'bricks-and-clicks',
        'business',
        'clicks-and-mortar',
        'client-based',
        'client-centered',
        'client-centric',
        'client-focused',
        'cloud-based',
        'cloud-centric',
        'cloudified',
        'collaborative',
        'compelling',
        'competitive',
        'cooperative',
        'corporate',
        'cost effective',
        'covalent',
        'cross functional',
        'cross-media',
        'cross-platform',
        'cross-unit',
        'customer directed',
        'customized',
        'cutting-edge',
        'distinctive',
        'distributed',
        'diverse',
        'dynamic',
        'e-business',
        'economically sound',
        'effective',
        'efficient',
        'elastic',
        'emerging',
        'empowered',
        'enabled',
        'end-to-end',
        'enterprise',
        'enterprise-wide',
        'equity invested',
        'error-free',
        'ethical',
        'excellent',
        'exceptional',
        'extensible',
        'extensive',
        'flexible',
        'focused',
        'frictionless',
        'front-end',
        'fully researched',
        'fully tested',
        'functional',
        'functionalized',
        'fungible',
        'future-proof',
        'global',
        'go forward',
        'goal-oriented',
        'granular',
        'high standards in',
        'high-payoff',
        'hyperscale',
        'high-quality',
        'highly efficient',
        'holistic',
        'impactful',
        'inexpensive',
        'innovative',
        'installed base',
        'integrated',
        'interactive',
        'interdependent',
        'intermandated',
        'interoperable',
        'intuitive',
        'just in time',
        'leading-edge',
        'leveraged',
        'long-term high-impact',
        'low-risk high-yield',
        'magnetic',
        'maintainable',
        'market positioning',
        'market-driven',
        'mission-critical',
        'multidisciplinary',
        'multifunctional',
        'multimedia based',
        'next-generation',
        'on-demand',
        'one-to-one',
        'open-source',
        'optimal',
        'orthogonal',
        'out-of-the-box',
        'pandemic',
        'parallel',
        'performance based',
        'plug-and-play',
        'premier',
        'premium',
        'principle-centered',
        'proactive',
        'process-centric',
        'professional',
        'progressive',
        'prospective',
        'quality',
        'real-time',
        'reliable',
        'resource-sucking',
        'resource-maximizing',
        'resource-leveling',
        'revolutionary',
        'robust',
        'scalable',
        'seamless',
        'stand-alone',
        'standardized',
        'standards compliant',
        'state of the art',
        'sticky',
        'strategic',
        'superior',
        'sustainable',
        'synergistic',
        'tactical',
        'team building',
        'team driven',
        'technically sound',
        'timely',
        'top-line',
        'transparent',
        'turnkey',
        'ubiquitous',
        'unique',
        'user-centric',
        'user friendly',
        'value-added',
        'vertical',
        'viral',
        'virtual',
        'visionary',
        'web-enabled',
        'wireless',
        'world-class',
        'worldwide',
        'action items',
        'alignments',
        'applications',
        'architectures',
        'bandwidth',
        'benefits',
        'best practices',
        'catalysts for change',
        'channels',
        'clouds',
        'collaboration and idea-sharing',
        'communities',
        'content',
        'convergence',
        'core competencies',
        'customer service',
        'data',
        'holistic',
        'big data',
        'fog networking',
        'blockchain',
        'prioritize',
        'next-generation',
        'enhance',
        'disruptive',
        'reimagine',
        'digitization',
        'framework',
        'seamless',
        'automation',
        'augmentation',
        'deliverables',
        'e-business',
        'e-commerce',
        'e-markets',
        'e-tailers',
        'e-services',
        'experiences',
        'cyber expertise',
        'functionalities',
        'fungibility',
        'growth strategies',
        'human capital',
        'cyber imperatives',
        'infomediaries',
        'information',
        'cyber infrastructures',
        'initiatives',
        'innovation',
        'intellectual capital',
        'cyber interfaces',
        'internal or "organic" sources',
        'cyber leadership',
        'leadership skills',
        'manufactured products',
        'cyber markets',
        'materials',
        'meta-services',
        'methodologies',
        'methods of empowerment',
        'cyber metrics',
        'mindshare',
        'cyber models',
        'networks',
        'niches',
        'niche security markets',
        'nosql',
        'opportunities',
        'outside-the-box thinking',
        'outsourcing',
        'paradigms',
        'partnerships',
        'platforms',
        'portals',
        'potentialities',
        'process improvements',
        'quality vectors',
        'relationships',
        'resources',
        'results',
        'ROI',
        'scenarios',
        'schemas',
        'scrums',
        'solutions',
        'sources',
        'sprints',
        'strategic theme areas',
        'supply chains',
        'synergy',
        'CVE',
        'CVSS',
        'cross-site-scripting',
        'buffer overflow',
        'command and control',
        'SQL injection',
        'no SQL',
        'chain of custody',
        'vulnerability chaining',
        'command injection',
        'systems',
        'technologies',
        'technology',
        'testing procedures',
        'total linkage',
        'value',
        'vortals',
        'web-readiness',
        'web services',
        'virtualization'
      ];
      var data1_index= Math.floor(Math.random()*textArray.length);
      var data1 = textArray[data1_index];

      var data2_index= Math.floor(Math.random()*textArray.length);
      var data2 = textArray[data2_index];

      var data3_index= Math.floor(Math.random()*textArray.length);
      var data3 = textArray[data3_index];

      var data4_index= Math.floor(Math.random()*textArray.length);
      var data4 = textArray[data4_index];

      var data5_index= Math.floor(Math.random()*textArray.length);
      var data5 = textArray[data5_index];

      var data6_index= Math.floor(Math.random()*textArray.length);
      var data6 = textArray[data6_index];

      var data7_index= Math.floor(Math.random()*textArray.length);
      var data7 = textArray[data7_index];

      var data8_index= Math.floor(Math.random()*textArray.length);
      var data8 = textArray[data8_index];

      var data9_index= Math.floor(Math.random()*textArray.length);
      var data9 = textArray[data9_index];

      var text = "CORPORATE BS BINGO!! Let's Play!";
        text += "\n" + "---";
        text += "\n" + "If you get three (3) of the following during a conference call, you win!";
        text += "\n" + " " ;
        text += "\n" + "* " + data1 + "\n" ;
        text += "\n" + "* " + data2 + "\n" ;
        text += "\n" + "* " + data3 + "\n" ;
        text += "\n" + "* " + data4 + "\n" ;
        text += "\n" + "* " + data5 + "\n" ;
        text += "\n" + "* " + data6 + "\n" ;
        text += "\n" + "* " + data7 + "\n" ;
        text += "\n" + "* " + data8 + "\n" ;
        text += "\n" + "* " + data9 + "\n" ;
        text += "\n -- Ωr "

        bot.reply(message, text);

    });
}
