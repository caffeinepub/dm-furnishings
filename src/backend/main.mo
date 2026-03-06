import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  // Data Types
  type ContactInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactInquiry {
    public func compare(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  type WholesaleInquiry = {
    name : Text;
    companyName : Text;
    city : Text;
    phone : Text;
    email : Text;
    productInterest : Text;
    monthlyOrderQuantity : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module WholesaleInquiry {
    public func compare(inquiry1 : WholesaleInquiry, inquiry2 : WholesaleInquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  // Persistent Data
  let contactInquiries = Map.empty<Time.Time, ContactInquiry>();
  let wholesaleInquiries = Map.empty<Time.Time, WholesaleInquiry>();

  // Public API
  public shared ({ caller }) func submitContactInquiry(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async () {
    let timestamp = Time.now();
    let inquiry : ContactInquiry = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    contactInquiries.add(timestamp, inquiry);
  };

  public shared ({ caller }) func submitWholesaleInquiry(
    name : Text,
    companyName : Text,
    city : Text,
    phone : Text,
    email : Text,
    productInterest : Text,
    monthlyOrderQuantity : Text,
    message : Text,
  ) : async () {
    let timestamp = Time.now();
    let inquiry : WholesaleInquiry = {
      name;
      companyName;
      city;
      phone;
      email;
      productInterest;
      monthlyOrderQuantity;
      message;
      timestamp;
    };
    wholesaleInquiries.add(timestamp, inquiry);
  };

  public query ({ caller }) func getAllContactInquiries() : async [ContactInquiry] {
    contactInquiries.values().toArray().sort();
  };

  public query ({ caller }) func getAllWholesaleInquiries() : async [WholesaleInquiry] {
    wholesaleInquiries.values().toArray().sort();
  };

  public query ({ caller }) func getContactInquiry(timestamp : Time.Time) : async ContactInquiry {
    switch (contactInquiries.get(timestamp)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getWholesaleInquiry(timestamp : Time.Time) : async WholesaleInquiry {
    switch (wholesaleInquiries.get(timestamp)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
