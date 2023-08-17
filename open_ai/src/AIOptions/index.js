export const arrayItems = [
  {
    name: "Sarcastic chatbot",
    id: "sarcasticchatbot",
    heading: "You are currently chatting with the funniest chatBot",
    description: "Marv is a factual chatbot that is also sarcastic.",
    option: {
      model:"gpt-3.5-turbo",
      messages:[{
        "role": "system",
        "content": "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses."
      },],
      temperature:1,
      max_tokens:256
    }
  },
  {
    name: "Grammer Correction",
    id: "grammerCorrection",
    heading: "give any graammer Sentence",
    description: "Corrects sentences into standard English.",
    option: {
      model:"gpt-3.5-turbo",
      messages:[
        {
          "role": "system",
          "content": "You will be provided with statements, and your task is to convert them to standard English."
        },
      ],
      temperature:0,
      max_tokens:256
    }
  },
  {
    name: "Explain Code",
    id: "explaincode",
    heading: "ask me any Code",
    description: "Explain a complicated piece of code.",
    option: {
      model:"gpt-3.5-turbo",
      messages:[
        {
          "role": "system",
          "content": "You will be provided with a piece of code, and your task is to explain it in a concise way."
        },
      ],
      temperature:0,
      max_tokens:1024
    }
  },
  {
    name: "Interview Questions",
    id: "interviewquestions",
    heading: "I will give you any 8 Interview Questions",
    description: "Create interview questions.",
    option: {
      model:"gpt-3.5-turbo",
      messages:[{
        "role": "user",
        "content": "Create a list of 8 questions for an interview with a science fiction author."
      }],
      temperature:0.5,
      max_tokens:1024
    }
  },
  {
    name: "Single page Website creator",
    id: "websitecreator",
    heading: "use me to create single page website",

    description: "Create a single page website.",
    option: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": "Make a single page website that shows off different neat javascript features for drop-downs and things to display information. The website should be an HTML file with embedded javascript and CSS."
        }
      ],
      temperature:0,
      max_tokens:2048
    }
  },
  {
    name: "Natural language to SQL",
    id: "naturallanguagetosql",
    heading: "ask me SQL",

    description: "Convert natural language into SQL queries.",
    option: {
      model: "gpt-3.5-turbo",
      messages:[
        {
          "role": "system",
          "content": "Given the following SQL tables, your job is to write queries given a user’s request.\n\nCREATE TABLE Orders (\n  OrderID int,\n  CustomerID int,\n  OrderDate datetime,\n  OrderTime varchar(8),\n  PRIMARY KEY (OrderID)\n);\n\nCREATE TABLE OrderDetails (\n  OrderDetailID int,\n  OrderID int,\n  ProductID int,\n  Quantity int,\n  PRIMARY KEY (OrderDetailID)\n);\n\nCREATE TABLE Products (\n  ProductID int,\n  ProductName varchar(50),\n  Category varchar(50),\n  UnitPrice decimal(10, 2),\n  Stock int,\n  PRIMARY KEY (ProductID)\n);\n\nCREATE TABLE Customers (\n  CustomerID int,\n  FirstName varchar(50),\n  LastName varchar(50),\n  Email varchar(100),\n  Phone varchar(20),\n  PRIMARY KEY (CustomerID)\n);"
        },
      ],
      temperature:0,
      max_tokens:1024
    }
  },
  {
    name: "Natural language to SQL",
    id: "naturallanguagetosql",
    heading: "ask me SQL",

    description: "Simplify text to a level appropriate for a second-grade student.",
    option: {
      model: "gpt-3.5-turbo",
      messages:[
        {
          "role": "system",
          "content": "Summarize content you are provided with for a second-grade student."
        },
        
      ],
      temperature:0,
      max_tokens:1024
    }
  },
  {
    name: "Summarize for a 2nd grader",
    id: "summrizeFor2ndGrader",
    heading: "I will summarize The the Para",

    description: "Convert natural language into SQL queries.",
    option: {
      model: "gpt-3.5-turbo",
      messages:[
        {
          "role": "system",
          "content": "Given the following SQL tables, your job is to write queries given a user’s request.\n\nCREATE TABLE Orders (\n  OrderID int,\n  CustomerID int,\n  OrderDate datetime,\n  OrderTime varchar(8),\n  PRIMARY KEY (OrderID)\n);\n\nCREATE TABLE OrderDetails (\n  OrderDetailID int,\n  OrderID int,\n  ProductID int,\n  Quantity int,\n  PRIMARY KEY (OrderDetailID)\n);\n\nCREATE TABLE Products (\n  ProductID int,\n  ProductName varchar(50),\n  Category varchar(50),\n  UnitPrice decimal(10, 2),\n  Stock int,\n  PRIMARY KEY (ProductID)\n);\n\nCREATE TABLE Customers (\n  CustomerID int,\n  FirstName varchar(50),\n  LastName varchar(50),\n  Email varchar(100),\n  Phone varchar(20),\n  PRIMARY KEY (CustomerID)\n);"
        },
      ],
      temperature:0,
      max_tokens:1024
    }
  },

]



// var result = arr.map(person => ({ value: person.id, text: person.name }));




