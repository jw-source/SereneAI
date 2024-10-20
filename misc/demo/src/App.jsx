// import { useEffect, useState } from "react";

// import ActiveCallDetail from "./components/ActiveCallDetail";
// import Button from "./components/base/Button";
// import Vapi from "@vapi-ai/web";
// import { isPublicKeyMissingError } from "./utils";

// // Put your Vapi Public Key below.
// const vapi = new Vapi("def07e68-c687-4d95-80dd-a171cc01d29c");

// const App = () => {
//   const [connecting, setConnecting] = useState(false);
//   const [connected, setConnected] = useState(false);


//   const [userTranscript, setUserTranscript] = useState("");
//   const [assistantTranscript, setAssistantTranscript] = useState("");
  
//   const [showTranscripts, setShowTranscripts] = useState(false); // State to manage transcript visibility

//   const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
//   const [volumeLevel, setVolumeLevel] = useState(0);

//   const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } = usePublicKeyInvalid();

//   // hook into Vapi events
//   useEffect(() => {
//     vapi.on("call-start", () => {
//       setConnecting(false);
//       setConnected(true);

//       setShowPublicKeyInvalidMessage(false);
//       setShowTranscripts(false);
//     });

//     vapi.on("call-end", () => {
//       setConnecting(false);
//       setConnected(false);

//       setShowPublicKeyInvalidMessage(false);
//       setShowTranscripts(true);
//     });

//     vapi.on("speech-start", () => {
//       setAssistantIsSpeaking(true);
//     });

//     vapi.on("speech-end", () => {
//       setAssistantIsSpeaking(false);
//     });

//     vapi.on("volume-level", (level) => {
//       setVolumeLevel(level);
//     });

//     vapi.on('message', (message) => {
//       console.log("Received message:", message);
//       if (message.role === 'user') {
//           setUserTranscript((prev) => prev + message.transcript + "\n");
//       } else if (message.role === 'assistant') {
//           setAssistantTranscript((prev) => prev + message.transcript + "\n");
//       }
//   });
  
//     vapi.on("error", (error) => {
//       console.error(error);

//       setConnecting(false);
//       if (isPublicKeyMissingError({ vapiError: error })) {
//         setShowPublicKeyInvalidMessage(true);
//       }
//     });

//     // we only want this to fire on mount
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // call start handler
//   const startCallInline = () => {
//     setConnecting(true);
//     vapi.start("5983bd53-7f57-4364-a161-ca212bf2c55d");
//   };
//   const endCall = () => {
//     console.log(userTranscript)
//     console.log(assistantTranscript)
//     vapi.stop();
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "100vw",
//         height: "100vh",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {!connected ? (
//         <Button
//           label="SereneAI"
//           onClick={startCallInline}
//           isLoading={connecting}
//         />
//       ) : ( 
//         <ActiveCallDetail
//           assistantIsSpeaking={assistantIsSpeaking}
//           volumeLevel={volumeLevel}
//           onEndCallClick={endCall}
//         /> 

      
//       )}


 
      

//       {showPublicKeyInvalidMessage ? <PleaseSetYourPublicKeyMessage /> : null}
//       <ReturnToDocsLink />
//     </div>
//   );
// };

// const assistantOptions = {
//   name: "Therapist",
//   firstMessage: "This is Serene, how can I help you today?",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en-US",
//   },
//   voice: {
//     provider: "playht",
//     voiceId: "jennifer",
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are a therapist, in charge of helping the user navigate there struggles and doubts. Please do your best to help out the user and hear them out. Ask them corresponding follow up quesitons`,
//       },
//     ],
//   },
// };

// const usePublicKeyInvalid = () => {
//   const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] = useState(false);

//   // close public key invalid message after delay
//   useEffect(() => {
//     if (showPublicKeyInvalidMessage) {
//       setTimeout(() => {
//         setShowPublicKeyInvalidMessage(false);
//       }, 3000);
//     }
//   }, [showPublicKeyInvalidMessage]);

//   return {
//     showPublicKeyInvalidMessage,
//     setShowPublicKeyInvalidMessage,
//   };
// };

// const PleaseSetYourPublicKeyMessage = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "25px",
//         left: "25px",
//         padding: "10px",
//         color: "#fff",
//         backgroundColor: "#f03e3e",
//         borderRadius: "5px",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
//       }}
//     >
//       Is your Vapi Public Key missing? (recheck your code)
//     </div>
//   );
// };

// const ReturnToDocsLink = () => {
//   return (
//     <a
//       href="https://docs.vapi.ai"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         position: "fixed",
//         top: "25px",
//         right: "25px",
//         padding: "5px 10px",
//         color: "#fff",
//         textDecoration: "none",
//         borderRadius: "5px",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
//       }}
//     >
//       Trends
//     </a>
//   );
// };

// export default App;


import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ActiveCallDetail from "./components/ActiveCallDetail";
import Button from "./components/base/Button";
import Vapi from "@vapi-ai/web";
import { isPublicKeyMissingError } from "./utils";
import TrendsPage from "./components/TrendsPage"; // Import the new page

// Put your Vapi Public Key below.
const vapi = new Vapi("ee2a19c3-f4a4-4ed7-a600-010281844d16");

const App = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } = usePublicKeyInvalid();

  // hook into Vapi events
  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);

      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);

      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (error) => {
      console.error(error);

      setConnecting(false);
      if (isPublicKeyMissingError({ vapiError: error })) {
        setShowPublicKeyInvalidMessage(true);
      }
    });

    // we only want this to fire on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call start handler
  const startCallInline = () => {
    setConnecting(true);
    vapi.start(assistantOptions);
  };
  const endCall = () => {
    vapi.stop();
  };

  return (
    <Router>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              !connected ? (
                <Button
                  label="SereneAI"
                  onClick={startCallInline}
                  isLoading={connecting}
                />
              ) : (
                <ActiveCallDetail
                  assistantIsSpeaking={assistantIsSpeaking}
                  volumeLevel={volumeLevel}
                  onEndCallClick={endCall}
                />
              )
            }
          />
          <Route path="/trends" element={<TrendsPage />} />
        </Routes>

        {showPublicKeyInvalidMessage ? <PleaseSetYourPublicKeyMessage /> : null}
        <ReturnToDocsLink />
      </div>
    </Router>
  );
};

const assistantOptions = {
  name: "Therapist",
  firstMessage: "This is Serene, how can I help you today?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a therapist, in charge of helping the user navigate their struggles and doubts. Please do your best to help the user and hear them out. Ask them corresponding follow-up questions.`,
      },
    ],
  },
};

const usePublicKeyInvalid = () => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] = useState(false);

  // close public key invalid message after delay
  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      setTimeout(() => {
        setShowPublicKeyInvalidMessage(false);
      }, 3000);
    }
  }, [showPublicKeyInvalidMessage]);

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage,
  };
};

const PleaseSetYourPublicKeyMessage = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "25px",
        padding: "10px",
        color: "#fff",
        backgroundColor: "#f03e3e",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      Is your Vapi Public Key missing? (recheck your code)
    </div>
  );
};

const ReturnToDocsLink = () => {
  return (
    <Link
      to="/trends"
      style={{
        position: "fixed",
        top: "25px",
        right: "25px",
        padding: "5px 10px",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      Trends
    </Link>
  );
};

export default App;
