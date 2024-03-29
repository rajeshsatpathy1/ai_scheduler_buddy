# ai_scheduler_buddy
An effort to create an AI buddy that provides you with a schedule to accomplish your goals and add it to your calendar.

## Steps to Completion
- Design
- Available libraries (to make it possible)
- Tech Stack
- Future Scope

### Design
The current research is to make an overall design for the AI buddy with the capabilities it should rudimentarily have. The design will be discussed over updating a .drawio file. For better visibility, the .drawio file has a png version. Whenever the .drawio file is updated, it is expected that the counterpart .png is also updated.

Other things to be added to design are the responsibilities of the backend, the pluggable API key that will be used for chatbot, inputs from the UI [add any others as per requirement]. Though all of them wouldn't require a diagram, a finalized flow chart would definitely help.

### Available libraries
This is especially important to check the feasibility of the project. The major ones are listed below.
- API interaction
- File conversion

### Future scope
This can be discussed at a later point.

## MERN stack
Currently only node and react inits are added.

To run the node app, try `npm start`. This uses nodemon [https://nodemon.io/] which is used to get a more fluid experience when making changes and running the app.

.gitignore is added to control the pushing of node modules and other unnecessary lib files.

The current state of the app allows you to visit http://localhost:3000/api/gemini?prompt=<add_your_prompt> to get a json response. The API key added is from Gemini. Further work needs to be done so that we can add into a function which can call AI chatbot according to our need.