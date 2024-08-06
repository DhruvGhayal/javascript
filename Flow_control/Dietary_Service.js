let person = "Employee";
let accessLevel;

if (person === "Employee") {
    accessLevel = "Full access to Dietary Services";
} else if (person === "Endrolled Member") {
    accessLevel = "Full access to Dietary Services and one-on-one interaction with dietician";
} else if (person === "Subscriber") {
    accessLevel = "Partial access to Dietary Services";
}else {
    accessLevel = "Enroll or at least subscribe first to avail this facility";
}

console.log("Access level :",accessLevel);