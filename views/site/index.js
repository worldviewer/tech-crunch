$(document).ready(function() {

     $('#category-search').typeahead({
          minLength: 1,
          hint: true,
          selector: {
               filter: "input-group-btn",
               filterButton: "btn btn-default",
               dropdown: "dropdown-menu dropdown-menu-right",
               list: "dropdown-menu",
               hint: "form-control"
          },
	     source: {
	          category: {
                    data: categories.categories
               }
	     },
          debug: true
	});

     $('#location-search').typeahead({
          minLength: 1,
          hint: true,
          selector: {
               filter: "input-group-btn",
               filterButton: "btn btn-default",
               dropdown: "dropdown-menu dropdown-menu-right",
               list: "dropdown-menu",
               hint: "form-control"
          },
          source: {
               location: {
                    data: locations.locations
               }
          },
          debug: true
     });


});

// LATER: Figure out how to associate location_uuids with this data
var locations = { locations: 
   [ 'San Francisco Region' ] };

var categories = { categories:
   [ '3D',
     '3D Printing',
     '3D Technology',
     'Accounting',
     'Active Lifestyle',
     'Ad Targeting',
     'Adaptive Equipment',
     'Advanced Materials',
     'Adventure Travel',
     'Advertising',
     'Advertising Exchanges',
     'Advertising Networks',
     'Advertising Platforms',
     'Advice',
     'Aerospace',
     'Agriculture',
     'Air Pollution Control',
     'Algorithms',
     'All Markets',
     'All Students',
     'Alternative Medicine',
     'Alumni',
     'Analytics',
     'Android',
     'Angels',
     'Animal Feed',
     'Anything Capital Intensive',
     'App Discovery',
     'App Marketing',
     'App Stores',
     'Application Performance Monitoring',
     'Application Platforms',
     'Apps',
     'Aquaculture',
     'Architecture',
     'Archiving',
     'Art',
     'Artificial Intelligence',
     'Artists Globally',
     'Assisitive Technology',
     'Assisted Living',
     'Auctions',
     'Audio',
     'Audiobooks',
     'Augmented Reality',
     'Auto',
     'Automated Kiosk',
     'Automotive',
     'B2B',
     'B2B Express Delivery',
     'Babies',
     'Baby Accessories',
     'Baby Boomers',
     'Baby Safety',
     'Banking',
     'Batteries',
     'Beach Businesses',
     'Beauty',
     'Bicycles',
     'Big Data',
     'Big Data Analytics',
     'Billing',
     'Bio-Pharm',
     'Biofuels',
     'Bioinformatics',
     'Biomass Power Generation',
     'Biometrics',
     'Biotechnology',
     'Biotechnology and Semiconductor',
     'Bitcoin',
     'Blogging Platforms',
     'Boating Industry',
     'BPO Services',
     'Brand Marketing',
     'Brewing',
     'Bridging Online and Offline',
     'Broadcasting',
     'Brokers',
     'Browser Extensions',
     'Building Owners',
     'Building Products',
     'Business Analytics',
     'Business Development',
     'Business Information Systems',
     'Business Intelligence',
     'Business Productivity',
     'Business Services',
     'Business Travelers',
     'Cable',
     'CAD',
     'Call Center Automation',
     'Cannabis',
     'Carbon',
     'Career Management',
     'Career Planning',
     'Cars',
     'Casual Games',
     'Cause Marketing',
     'Celebrity',
     'Certification Test',
     'Charities',
     'Charity',
     'Charter Schools',
     'Chat',
     'Chemicals',
     'Child Care',
     'China Internet',
     'Civil Engineers',
     'Classifieds',
     'Clean Energy',
     'Clean Technology',
     'Clean Technology IT',
     'Clinical Trials',
     'Cloud Computing',
     'Cloud Data Services',
     'Cloud Gaming',
     'Cloud Infrastructure',
     'Cloud Management',
     'Cloud Security',
     'Cloud-Based Music',
     'Coffee',
     'Collaboration',
     'Collaborative Consumption',
     'Collectibles',
     'College Campuses',
     'College Recruiting',
     'Colleges',
     'Comics',
     'Commercial Real Estate',
     'Commercial Solar',
     'Commodities',
     'Communications Hardware',
     'Communications Infrastructure',
     'Communities',
     'Comparison Shopping',
     'Computer Vision',
     'Computers',
     'Concentrated Solar Power',
     'Concerts',
     'Console Gaming',
     'Construction',
     'Consulting',
     'Consumer Behavior',
     'Consumer Electronics',
     'Consumer Goods',
     'Consumer Internet',
     'Consumer Lending',
     'Consumers',
     'Contact Centers',
     'Contact Management',
     'Content',
     'Content Creators',
     'Content Delivery',
     'Content Discovery',
     'Content Syndication',
     'Contests',
     'Cooking',
     'Corporate IT',
     'Corporate Training',
     'Corporate Wellness',
     'Cosmetic Surgery',
     'Cosmetics',
     'Coupons',
     'Coworking',
     'Craft Beer',
     'Creative',
     'Creative Industries',
     'Credit',
     'Credit Cards',
     'CRM',
     'Crowdfunding',
     'Crowdsourcing',
     'Cryptocurrency',
     'Curated Web',
     'Custom Retail',
     'Customer Service',
     'Customer Support Tools',
     'Cyber',
     'Cyber Security',
     'Data Center Automation',
     'Data Center Infrastructure',
     'Data Centers',
     'Data Integration',
     'Data Mining',
     'Data Privacy',
     'Data Security',
     'Data Visualization',
     'Databases',
     'Debt Collecting',
     'Deep Information Technology',
     'Defense',
     'Delivery',
     'Demographies',
     'Dental',
     'Design',
     'Designers',
     'Developer APIs',
     'Developer Tools',
     'Development Platforms',
     'Diabetes',
     'Diagnostics',
     'Dietary Supplements',
     'Digital Entertainment',
     'Digital Media',
     'Digital Rights Management',
     'Digital Signage',
     'Direct Advertising',
     'Direct Marketing',
     'Direct Sales',
     'Discounts',
     'Displays',
     'Disruptive Models',
     'Distribution',
     'Distributors',
     'Diving',
     'DIY',
     'Doctors',
     'Document Management',
     'DOD/Military',
     'Domains',
     'Drones',
     'E-Books',
     'E-Commerce',
     'E-Commerce Platforms',
     'Early Stage IT',
     'Early-Stage Technology',
     'East Africa',
     'EBooks',
     'EDA Tools',
     'Ediscovery',
     'EdTech',
     'Education',
     'Educational Games',
     'Edutainment',
     'Elder Care',
     'Elderly',
     'Electric Vehicles',
     'Electrical Distribution',
     'Electronic Health Records',
     'Electronics',
     'Email',
     'Email Marketing',
     'Email Newsletters',
     'Embedded Hardware and Software',
     'Emerging Markets',
     'Employer Benefits Programs',
     'Employment',
     'Energy',
     'Energy Efficiency',
     'Energy IT',
     'Energy Management',
     'Energy Storage',
     'Engineering Firms',
     'English-Speaking',
     'Enterprise 2.0',
     'Enterprise Application',
     'Enterprise Hardware',
     'Enterprise Purchasing',
     'Enterprise Resource Planning',
     'Enterprise Search',
     'Enterprise Security',
     'Enterprise Software',
     'Enterprises',
     'Entertainment',
     'Entertainment Industry',
     'Entrepreneur',
     'Environmental Innovation',
     'Estimation and Quoting',
     'Event Management',
     'Events',
     'Exercise',
     'Experience Design',
     'Eyewear',
     'Face Recognition',
     'Facebook Applications',
     'Families',
     'Fantasy Sports',
     'Farmers Market',
     'Farming',
     'Fashion',
     'Fertility',
     'Field Support Services',
     'File Sharing',
     'Film',
     'Film Distribution',
     'Film Production',
     'Finance',
     'Finance Technology',
     'Financial Exchanges',
     'Financial Services',
     'FinTech',
     'First Aid',
     'Fitness',
     'Flash Sales',
     'Flash Storage',
     'Fleet Management',
     'Flowers',
     'Fmcg',
     'Food Processing',
     'Forums',
     'FPGA',
     'Franchises',
     'Fraud Detection',
     'Freelancers',
     'Freemium',
     'FreetoPlay Gaming',
     'Fruit',
     'Fuel Cells',
     'Fuels',
     'Funeral Industry',
     'Furniture',
     'Gadget',
     'Gambling',
     'Game',
     'Game Mechanics',
     'Games',
     'Gamification',
     'Gas',
     'Gay & Lesbian',
     'General Public Worldwide',
     'Generation Y-Z',
     'Genetic Testing',
     'Geospatial',
     'Gift Card',
     'Gift Exchange',
     'Gift Registries',
     'Gold',
     'Golf Equipment',
     'Google Apps',
     'Google Glass',
     'Governance',
     'Government Innovation',
     'Governments',
     'Gps',
     'Graphic Design',
     'Graphics',
     'Green',
     'Green Building',
     'Green Consumer Goods',
     'GreenTech',
     'Groceries',
     'Group Buying',
     'Group Email',
     'Group SMS',
     'Guide to Nightlife',
     'Guides',
     'Handmade',
     'Hardware',
     'Hardware + Software',
     'Health and Insurance',
     'Health and Wellness',
     'Health Care',
     'Health Care Information Technology',
     'Health Diagnostics',
     'Health Services Industry',
     'Healthcare Services',
     'Heavy Industry',
     'Hedge Funds',
     'Hi Tech',
     'High School Students',
     'High Schools',
     'High Tech',
     'Hip Hop',
     'Home & Garden',
     'Home Automation',
     'Home Decor',
     'Home Owners',
     'Home Renovation',
     'Homeland Security',
     'Homeless Shelter',
     'Hospitality',
     'Hospitals',
     'Hotels',
     'Human Computer Interaction',
     'Human Resource Automation',
     'Human Resources',
     'Humanitarian',
     'Hunting Industry',
     'IaaS',
     'ICT',
     'Identity',
     'Identity Management',
     'Image Recognition',
     'Impact Investing',
     'In-Flight Entertainment',
     'Incentives',
     'Incubators',
     'Independent Music',
     'Independent Music Labels',
     'Independent Pharmacies',
     'Indians',
     'Indoor Positioning',
     'Industrial',
     'Industrial Automation',
     'Industrial Energy Efficiency',
     'Information Security',
     'Information Services',
     'Information Technology',
     'Infrastructure',
     'Infrastructure Builders',
     'Innovation Engineering',
     'Innovation Management',
     'Insurance',
     'Insurance Companies',
     'Intellectual Asset Management',
     'Intellectual Property',
     'Intelligent Systems',
     'Interest Graph',
     'Interface Design',
     'Interior Design',
     'Internet',
     'Internet Infrastructure',
     'Internet Marketing',
     'Internet of Things',
     'Internet Radio Market',
     'Internet Service Providers',
     'Internet Technology',
     'Internet TV',
     'Invention',
     'Investment Management',
     'iOS',
     'iPad',
     'iPhone',
     'iPod Touch',
     'IT and Cybersecurity',
     'IT Management',
     'Jewelry',
     'Journalism',
     'K-12 Education',
     'Kids',
     'Kinect',
     'Knowledge Management',
     'Labor Optimization',
     'Land Developers',
     'Landscaping',
     'Language Learning',
     'Lasers',
     'Law Enforcement',
     'Lead Generation',
     'Lead Management',
     'Legal',
     'Leisure',
     'Licensing',
     'Life Sciences',
     'Lifestyle',
     'Lifestyle Businesses',
     'Lifestyle Products',
     'Lighting',
     'Limousines',
     'Lingerie',
     'Linux',
     'Local',
     'Local Advertising',
     'Local Based Services',
     'Local Businesses',
     'Local Commerce',
     'Local Coupons',
     'Local Search',
     'Local Services',
     'Location Based Services',
     'Logistics',
     'Logistics Company',
     'Lotteries',
     'Low Bid Auctions',
     'Loyalty Programs',
     'M2M',
     'Mac',
     'Mac Applications',
     'Machine Learning',
     'Made in Italy',
     'Manufacturing',
     'Maps',
     'Market Research',
     'Marketing Automation',
     'Marketplaces',
     'Mass Customization',
     'Match-Making',
     'Material Science',
     'Mechanical Solutions',
     'Media',
     'Medical',
     'Medical Devices',
     'Medical Professionals',
     'Medication Adherence',
     'Meeting Software',
     'Mens Specific',
     'Messaging',
     'mHealth',
     'Micro-Enterprises',
     'MicroBlogging',
     'Military Deployment',
     'Minerals',
     'Mining Technologies',
     'MMO Games',
     'Mobile',
     'Mobile Advertising',
     'Mobile Analytics',
     'Mobile Commerce',
     'Mobile Coupons',
     'Mobile Devices',
     'Mobile Emergency&Health',
     'Mobile Enterprise',
     'Mobile Games',
     'Mobile Health',
     'Mobile Infrastructure',
     'Mobile Payments',
     'Mobile Search',
     'Mobile Security',
     'Mobile Shopping',
     'Mobile Social',
     'Mobile Software Tools',
     'Mobile Video',
     'Mobility',
     'Monetization',
     'Moneymaking',
     'Mothers',
     'Motion Capture',
     'Motors',
     'Multi-level Marketing',
     'Music',
     'Music Education',
     'Music Services',
     'Music Venues',
     'Musical Instruments',
     'Musicians',
     'Nanotechnology',
     'Natural Gas Uses',
     'Natural Language Processing',
     'Natural Resources',
     'Navigation',
     'Network Security',
     'Networking',
     'Neuroscience',
     'New Product Development',
     'New Technologies',
     'News',
     'NFC',
     'Niche Specific',
     'Nightclubs',
     'Nightlife',
     'Non Profit',
     'Nonprofits',
     'Notebooks',
     'Novelty Stores',
     'Nutraceutical',
     'Nutrition',
     'Office Space',
     'Offline Businesses',
     'Oil',
     'Oil & Gas',
     'Oil and Gas',
     'Online Auctions',
     'Online Dating',
     'Online Education',
     'Online Gaming',
     'Online Identity',
     'Online Rental',
     'Online Reservations',
     'Online Scheduling',
     'Online Shopping',
     'Online Travel',
     'Online Video Advertising',
     'Open Source',
     'Operating Systems',
     'Opinions',
     'Optical Communications',
     'Optimization',
     'Organic',
     'Organic Food',
     'Outdoor Advertising',
     'Outdoors',
     'Outsourcing',
     'P2P Money Transfer',
     'PaaS',
     'Parenting',
     'Parking',
     'Payments',
     'PC Gaming',
     'Peer-to-Peer',
     'Penetration Testing',
     'Performance Marketing',
     'Performing Arts',
     'Personal Branding',
     'Personal Data',
     'Personal Finance',
     'Personal Health',
     'Personalization',
     'Pervasive Computing',
     'Pets',
     'Pharmaceuticals',
     'Photo Editing',
     'Photo Sharing',
     'Photography',
     'Physical Security',
     'Physicians',
     'Plumbers',
     'Podcast',
     'Point of Sale',
     'Politics',
     'Polling',
     'Portals',
     'Postal and Courier Services',
     'Pre Seed',
     'Prediction Markets',
     'Predictive Analytics',
     'Presentations',
     'Price Comparison',
     'Printing',
     'Privacy',
     'Private School',
     'Private Social Networking',
     'Procurement',
     'Product Design',
     'Product Development Services',
     'Product Search',
     'Productivity',
     'Productivity Software',
     'Professional Networking',
     'Professional Services',
     'Project Management',
     'Promotional',
     'Property Management',
     'Proximity Internet',
     'Psychology',
     'Public Relations',
     'Public Safety',
     'Public Transportation',
     'Publishing',
     'Q&A',
     'QR Codes',
     'Quantified Self',
     'Quantitative Marketing',
     'Racing',
     'Radical Breakthrough Startups',
     'Rapidly Expanding',
     'Reading Apps',
     'Real Estate',
     'Real Estate Investors',
     'Real Time',
     'Realtors',
     'Recipes',
     'Recreation',
     'Recruiting',
     'Recycling',
     'Registrars',
     'Rehabilitation',
     'Religion',
     'Remediation',
     'Renewable Energies',
     'Renewable Tech',
     'Rental Housing',
     'Reputation',
     'Residential Solar',
     'Resorts',
     'Restaurants',
     'Retail',
     'Retail Technology',
     'Retirement',
     'Reviews and Recommendations',
     'RFID',
     'Ride Sharing',
     'RIM',
     'Risk Management',
     'Robotics',
     'Rural Energy',
     'SaaS',
     'Sailing Community',
     'Sales and Marketing',
     'Sales Automation',
     'Salesforce Killers',
     'Search',
     'Search Marketing',
     'Security',
     'Self Development',
     'Self Storage',
     'Semantic Search',
     'Semantic Web',
     'Semiconductor Manufacturing Equipment',
     'Semiconductors',
     'Senior Citizens',
     'Senior Health',
     'Sensors',
     'SEO',
     'Serious Games',
     'Service Industries',
     'Service Providers',
     'Services',
     'Sex',
     'Sex Industry',
     'Shared Services',
     'Shipping',
     'Shipping Broker Industry',
     'Shoes',
     'Shopping',
     'Simulation',
     'Skate Wear',
     'Skill Assessment',
     'Skill Gaming',
     'Small and Medium Businesses',
     'Smart Building',
     'Smart Grid',
     'SMS',
     'SNS',
     'Soccer',
     'Social + Mobile + Local',
     'Social Activists',
     'Social Bookmarking',
     'Social Business',
     'Social Buying',
     'Social Commerce',
     'Social CRM',
     'Social Fundraising',
     'Social Games',
     'Social Innovation',
     'Social Investing',
     'Social Media',
     'Social Media Advertising',
     'Social Media Agent',
     'Social Media Management',
     'Social Media Marketing',
     'Social Media Monitoring',
     'Social Media Platforms',
     'Social Network Media',
     'Social News',
     'Social Opinion Platform',
     'Social Recruiting',
     'Social Search',
     'Social Television',
     'Social Travel',
     'Software',
     'Software Compliance',
     'Solar',
     'South East Asia',
     'Space Travel',
     'Spam Filtering',
     'Spas',
     'Specialty Chemicals',
     'Specialty Foods',
     'Specialty Retail',
     'Speech Recognition',
     'Sponsorship',
     'Sporting Goods',
     'Sports',
     'Sports Stadiums',
     'Staffing Firms',
     'Startup Histrionics',
     'Startups',
     'Stock Exchanges',
     'Storage',
     'Subscription Businesses',
     'Subscription Service',
     'Sunglasses',
     'Supply Chain Management',
     'Surfing Community',
     'Surveys',
     'Sustainability',
     'Swimming',
     'Synchronization',
     'Systems',
     'Tablets',
     'Task Management',
     'Taxis',
     'Tea',
     'Teachers',
     'Teaching STEM Concepts',
     'Tech Field Support',
     'Technical Continuing Education',
     'Technology',
     'Teenagers',
     'Telecommunications',
     'Telephony',
     'Television',
     'Temporary Staffing',
     'Test and Measurement',
     'Testing',
     'Text Analytics',
     'Textbooks',
     'Textiles',
     'Theatre',
     'Therapeutics',
     'Ticketing',
     'Timeshares',
     'Tobacco',
     'Tourism',
     'Toys',
     'Tracking',
     'Trading',
     'Training',
     'Transaction Processing',
     'Translation',
     'Transportation',
     'Travel',
     'Travel & Tourism',
     'Trusted Networks',
     'Tutoring',
     'TV Production',
     'TV Station',
     'Twin-Tip Skis',
     'Twitter Applications',
     'Underserved Children',
     'Unifed Communications',
     'Universities',
     'University Students',
     'Unmanned Air Systems',
     'Usability',
     'USB',
     'User Experience Design',
     'User Interface',
     'User Testing',
     'Utilities',
     'Utility Land Vehicles',
     'UV LEDs',
     'Vacation Rentals',
     'Vending and Concessions',
     'Venture Capital',
     'Ventures for Good',
     'Vertical Search',
     'Veterinary',
     'Video',
     'Video Chat',
     'Video Conferencing',
     'Video Editing',
     'Video Game Tournaments',
     'Video Games',
     'Video on Demand',
     'Video Processing',
     'Video Streaming',
     'Virtual Currency',
     'Virtual Desktop',
     'Virtual Goods',
     'Virtual Workforces',
     'Virtual Worlds',
     'Virtualization',
     'Visual Search',
     'Visualization',
     'VoIP',
     'Vulnerability Management',
     'Waste Management',
     'Watch',
     'Water',
     'Water Purification',
     'Wealth Management',
     'Wearables',
     'Web Browsers',
     'Web CMS',
     'Web Design',
     'Web Development',
     'Web Hosting',
     'Web Presence Management',
     'Web Tools',
     'WebOS',
     'Weddings',
     'West Africa',
     'Wholesale',
     'Wind',
     'Windows Phone 7',
     'Wine And Spirits',
     'Wireless',
     'Women',
     'Writers',
     'Young Adults' ] };