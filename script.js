function generateGuide() {
    const topic = document.getElementById('topic').value.toLowerCase();
    const output = document.getElementById('output');
    
    output.innerHTML = '<p class="loading">Generating your study guide...</p>';

    setTimeout(() => {
        output.innerHTML = '';

        let tips, resources, questions;

        // Determine topic-specific content
        if (topic.includes("javascript")) {
            tips = generateStudyTips("JavaScript");
            resources = generateResources("JavaScript");
            questions = generatePracticeQuestions("JavaScript");
        } else if (topic.includes("python")) {
            tips = generateStudyTips("Python");
            resources = generateResources("Python");
            questions = generatePracticeQuestions("Python");
        } else if (topic.includes("mathematics") || topic.includes("math")) {
            tips = generateStudyTips("Mathematics");
            resources = generateResources("Mathematics");
            questions = generatePracticeQuestions("Mathematics");
        } else if (topic.includes("accounting")) {
            tips = generateStudyTips("Accounting");
            resources = generateResources("Accounting");
            questions = generatePracticeQuestions("Accounting");
        } else if (topic.includes("life sciences")) {
            tips = generateStudyTips("Life Sciences");
            resources = generateResources("Life Sciences");
            questions = generatePracticeQuestions("Life Sciences");
        } else if (topic.includes("history")) {
            tips = generateStudyTips("History");
            resources = generateResources("History");
            questions = generatePracticeQuestions("History");
        } else if (topic.includes("chemistry")) {
            tips = generateStudyTips("Chemistry");
            resources = generateResources("Chemistry");
            questions = generatePracticeQuestions("Chemistry");
        } else if (topic.includes("physics")) {
            tips = generateStudyTips("Physics");
            resources = generateResources("Physics");
            questions = generatePracticeQuestions("Physics");
        } else if (topic.includes("geography")) {
            tips = generateStudyTips("Geography");
            resources = generateResources("Geography");
            questions = generatePracticeQuestions("Geography");
        } else if (topic.includes("literature")) {
            tips = generateStudyTips("Literature");
            resources = generateResources("Literature");
            questions = generatePracticeQuestions("Literature");
        } else if (topic.includes("computer science")) {
            tips = generateStudyTips("Computer Science");
            resources = generateResources("Computer Science");
            questions = generatePracticeQuestions("Computer Science");
        } else if (topic.includes("biology")) {
            tips = generateStudyTips("Biology");
            resources = generateResources("Biology");
            questions = generatePracticeQuestions("Biology");
        } else if (topic.includes("economics")) {
            tips = generateStudyTips("Economics");
            resources = generateResources("Economics");
            questions = generatePracticeQuestions("Economics");
        } else if (topic.includes("political science")) {
            tips = generateStudyTips("Political Science");
            resources = generateResources("Political Science");
            questions = generatePracticeQuestions("Political Science");
        } else {
            output.innerHTML = '<p>No specific study guide could be generated for this topic. Try "JavaScript," "Python," "Mathematics," "Accounting," "Life Sciences," "History," "Chemistry," "Physics," "Geography," "Literature," "Computer Science," "Biology," "Economics," or "Political Science".</p>';
            return;
        }

        output.innerHTML += `
            <div class="section">
                <h3>Study Tips:</h3><ul>${tips}</ul>
            </div>
            <div class="section">
                <h3>Resources:</h3><ul>${resources}</ul>
            </div>
            <div class="section">
                <h3>Practice Questions:</h3><ul>${questions}</ul>
            </div>
        `;
    }, 800);
}

function generateStudyTips(topic) {
    switch(topic) {
        case "JavaScript":
            return `
                <li>Break down JavaScript concepts into small, manageable sections.</li>
                <li>Practice coding daily to strengthen understanding.</li>
                <li>Review JavaScript fundamentals regularly.</li>
            `;
        case "Python":
            return `
                <li>Understand Python's syntax and indentation rules.</li>
                <li>Practice Python's data types like lists, dictionaries, and tuples.</li>
                <li>Explore Python libraries for various use cases.</li>
            `;
        case "Mathematics":
            return `
                <li>Practice problems daily to enhance understanding of mathematical concepts.</li>
                <li>Focus on understanding formulas rather than just memorizing them.</li>
                <li>Use diagrams and visual aids to better understand geometry and algebra.</li>
            `;
        case "Accounting":
            return `
                <li>Familiarize yourself with basic accounting principles and terminology.</li>
                <li>Practice balancing accounts and creating financial statements.</li>
                <li>Understand the differences between assets, liabilities, and equity.</li>
            `;
        case "Life Sciences":
            return `
                <li>Use flashcards to remember key biological terms and definitions.</li>
                <li>Understand processes like photosynthesis and cellular respiration step-by-step.</li>
                <li>Practice drawing and labeling biological diagrams, such as cell structures.</li>
            `;
        case "History":
            return `
                <li>Create timelines to understand the sequence of events.</li>
                <li>Focus on understanding causes and effects, not just memorizing dates.</li>
                <li>Use primary sources for a deeper understanding of historical context.</li>
            `;
        case "Chemistry":
            return `
                <li>Familiarize yourself with the periodic table and element properties.</li>
                <li>Practice balancing chemical equations.</li>
                <li>Understand the basic principles of chemical bonding and reactions.</li>
            `;
        case "Physics":
            return `
                <li>Understand the core principles before jumping into problem-solving.</li>
                <li>Use diagrams to visualize physics problems.</li>
                <li>Practice applying formulas to different scenarios.</li>
            `;
        case "Geography":
            return `
                <li>Study maps to get familiar with geographic locations and features.</li>
                <li>Understand physical and human geography concepts.</li>
                <li>Use case studies to learn about specific geographic phenomena.</li>
            `;
        case "Literature":
            return `
                <li>Analyze characters, themes, and symbols in each work.</li>
                <li>Summarize chapters to retain main points and plot developments.</li>
                <li>Practice close reading to understand the language and style of the author.</li>
            `;
        case "Computer Science":
            return `
                <li>Focus on understanding algorithms and data structures.</li>
                <li>Practice coding by solving problems and building small projects.</li>
                <li>Study core computer science concepts like complexity and memory management.</li>
            `;
        case "Biology":
            return `
                <li>Study cell structure, function, and processes in detail.</li>
                <li>Use diagrams to understand anatomy and physiological processes.</li>
                <li>Review genetic concepts and evolutionary biology.</li>
            `;
        case "Economics":
            return `
                <li>Understand basic economic principles and terminology.</li>
                <li>Review supply and demand models and market structures.</li>
                <li>Stay updated with current economic events to apply theory in real life.</li>
            `;
        case "Political Science":
            return `
                <li>Understand political ideologies and government structures.</li>
                <li>Study key political philosophers and their ideas.</li>
                <li>Keep up with current events to understand practical applications.</li>
            `;
    }
}

function generateResources(topic) {
    switch(topic) {
        case "JavaScript":
            return `
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Web Docs</a></li>
                <li><a href="https://www.freecodecamp.org/learn" target="_blank">FreeCodeCamp</a></li>
                <li><a href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
            `;
        case "Python":
            return `
                <li><a href="https://docs.python.org/3/" target="_blank">Python Documentation</a></li>
                <li><a href="https://realpython.com/" target="_blank">Real Python</a></li>
                <li><a href="https://www.learnpython.org/" target="_blank">LearnPython.org</a></li>
            `;
        case "Mathematics":
            return `
                <li><a href="https://www.khanacademy.org/math" target="_blank">Khan Academy</a></li>
                <li><a href="https://www.mathsisfun.com/" target="_blank">Math is Fun</a></li>
                <li><a href="https://www.wolframalpha.com/" target="_blank">Wolfram Alpha</a></li>
            `;
        case "Accounting":
            return `
                <li><a href="https://www.accountingcoach.com/" target="_blank">AccountingCoach</a></li>
                <li><a href="https://www.coursera.org/courses?query=accounting" target="_blank">Coursera</a></li>
                <li><a href="https://www.investopedia.com/accounting/" target="_blank">Investopedia - Accounting</a></li>
            `;
        case "Life Sciences":
            return `
                <li><a href="https://www.khanacademy.org/science/biology" target="_blank">Khan Academy - Biology</a></li>
                <li><a href="https://www.biologycorner.com/" target="_blank">Biology Corner</a></li>
                <li><a href="https://www.ck12.org/biology/" target="_blank">CK-12 - Biology</a></li>
            `;
        case "History":
            return `
                <li><a href="https://www.history.com/" target="_blank">History.com</a></li>
                <li><a href="https://www.khanacademy.org/humanities/history" target="_blank">Khan Academy - History</a></li>
                <li><a href="https://www.bbc.co.uk/history" target="_blank">BBC History</a></li>
            `;
        case "Chemistry":
            return `
                <li><a href="https://www.chemguide.co.uk/" target="_blank">Chemguide</a></li>
                <li><a href="https://www.khanacademy.org/science/chemistry" target="_blank">Khan Academy - Chemistry</a></li>
                <li><a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank">PubChem</a></li>
            `;
        case "Physics":
            return `
                <li><a href="https://www.physicsclassroom.com/" target="_blank">The Physics Classroom</a></li>
                <li><a href="https://www.khanacademy.org/science/physics" target="_blank">Khan Academy - Physics</a></li>
                <li><a href="https://hyperphysics.phy-astr.gsu.edu/" target="_blank">HyperPhysics</a></li>
            `;
        case "Geography":
            return `
                <li><a href="https://www.nationalgeographic.com/" target="_blank">National Geographic</a></li>
                <li><a href="https://www.khanacademy.org/humanities/geography" target="_blank">Khan Academy - Geography</a></li>
                <li><a href="https://www.worldatlas.com/" target="_blank">World Atlas</a></li>
            `;
        case "Literature":
            return `
                <li><a href="https://www.sparknotes.com/" target="_blank">SparkNotes</a></li>
                <li><a href="https://www.cliffsnotes.com/" target="_blank">CliffsNotes</a></li>
                <li><a href="https://literarydevices.net/" target="_blank">Literary Devices</a></li>
            `;
        case "Computer Science":
            return `
                <li><a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a></li>
                <li><a href="https://www.coursera.org/courses?query=computer%20science" target="_blank">Coursera - Computer Science</a></li>
                <li><a href="https://www.udacity.com/" target="_blank">Udacity</a></li>
            `;
        case "Biology":
            return `
                <li><a href="https://www.biology-online.org/" target="_blank">Biology Online</a></li>
                <li><a href="https://www.nature.com/biology" target="_blank">Nature - Biology</a></li>
                <li><a href="https://www.khanacademy.org/science/biology" target="_blank">Khan Academy - Biology</a></li>
            `;
        case "Economics":
            return `
                <li><a href="https://www.economicshelp.org/" target="_blank">Economics Help</a></li>
                <li><a href="https://www.khanacademy.org/economics-finance-domain" target="_blank">Khan Academy - Economics</a></li>
                <li><a href="https://www.investopedia.com/economics/" target="_blank">Investopedia - Economics</a></li>
            `;
        case "Political Science":
            return `
                <li><a href="https://www.politicalscience.org/" target="_blank">Political Science Resources</a></li>
                <li><a href="https://www.coursera.org/courses?query=political%20science" target="_blank">Coursera - Political Science</a></li>
                <li><a href="https://www.psr.org/" target="_blank">Political Science Review</a></li>
            `;
    }
}

function generatePracticeQuestions(topic) {
    switch(topic) {
        case "JavaScript":
            return `
                <li>Write a JavaScript function that reverses a string.</li>
                <li>Create an interactive to-do list using JavaScript.</li>
                <li>Explain the difference between "let", "const", and "var".</li>
            `;
        case "Python":
            return `
                <li>Write a Python script to calculate factorial of a number.</li>
                <li>Explain the difference between lists and tuples in Python.</li>
                <li>Create a simple calculator using Python functions.</li>
            `;
        case "Mathematics":
            return `
                <li>Solve for x: 3x + 5 = 20.</li>
                <li>Calculate the area of a triangle with a base of 10cm and height of 6cm.</li>
                <li>Explain the Pythagorean theorem and provide an example.</li>
            `;
        case "Accounting":
            return `
                <li>Define and explain the accounting equation.</li>
                <li>List the differences between assets and liabilities.</li>
                <li>Prepare a sample income statement for a small business.</li>
            `;
        case "Life Sciences":
            return `
                <li>Describe the process of photosynthesis.</li>
                <li>Explain the function of mitochondria in a cell.</li>
                <li>What are the differences between prokaryotic and eukaryotic cells?</li>
            `;
        case "History":
            return `
                <li>Explain the significance of the Industrial Revolution.</li>
                <li>Describe the causes of World War I.</li>
                <li>Who were the major figures in the American Civil War?</li>
            `;
        case "Chemistry":
            return `
                <li>Balance the equation: H2 + O2 -> H2O.</li>
                <li>Explain the concept of moles in chemistry.</li>
                <li>What is an ionic bond? Give an example.</li>
            `;
        case "Physics":
            return `
                <li>Explain Newton's three laws of motion with examples.</li>
                <li>Calculate the force needed to move a 10kg object at an acceleration of 5m/s².</li>
                <li>What is kinetic energy, and how is it calculated?</li>
            `;
        case "Geography":
            return `
                <li>What are the primary layers of Earth's atmosphere?</li>
                <li>Explain the water cycle.</li>
                <li>List the five major oceans on Earth and one characteristic of each.</li>
            `;
        case "Literature":
            return `
                <li>Analyze the character development of Hamlet in Shakespeare's play.</li>
                <li>Explain the themes of love and revenge in "Wuthering Heights".</li>
                <li>What is symbolism, and how is it used in "The Great Gatsby"?</li>
            `;
        case "Computer Science":
            return `
                <li>Explain the difference between stacks and queues.</li>
                <li>Write a basic sorting algorithm in pseudocode.</li>
                <li>Define and explain the purpose of a database index.</li>
            `;
        case "Biology":
            return `
                <li>Describe the process of mitosis.</li>
                <li>What are the primary functions of the human digestive system?</li>
                <li>Explain the basics of Mendelian genetics.</li>
            `;
        case "Economics":
            return `
                <li>Define and explain supply and demand.</li>
                <li>What are the main goals of macroeconomic policy?</li>
                <li>Explain the difference between inflation and deflation.</li>
            `;
        case "Political Science":
            return `
                <li>Explain the concept of democracy and its key features.</li>
                <li>What is the role of the judiciary in a government?</li>
                <li>Discuss the pros and cons of a two-party political system.</li>
            `;
    }
}