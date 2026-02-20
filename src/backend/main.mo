import List "mo:core/List";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type MessageType = { #inquiry; #feedback; #request; #other };

  type ContactSubmission = {
    name : Text;
    email : Text;
    messageType : MessageType;
    message : Text;
    sender : Principal;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, messageType : MessageType, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields must be filled out.");
    };

    let submission : ContactSubmission = {
      name;
      email;
      messageType;
      message;
      sender = caller;
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };

  public shared ({ caller }) func clearSubmissions() : async () {
    submissions.clear();
  };
};
