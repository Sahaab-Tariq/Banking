import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

// Import the `Account` type from your type definitions
import type { Account } from "@/types/index"; // Adjust the path if necessary
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: "Andrian", lastName: "Nickola", email: 'Andrian@gmail.com' };

  // Define dummy accounts with all required properties
  const dummyAccounts: Account[] = [
    {
      id: "1",
      name: "Bank 1",
      currentBalance: 1000,
      availableBalance: 1000,
      officialName: "Official Bank 1",
      mask: "****1234",
      institutionId: "inst1",
      type: "savings",
      subtype: "personal",
      appwriteItemId: "app1",
      shareableId: "share1",
    },
    {
      id: "2",
      name: "Bank 2",
      currentBalance: 1500,
      availableBalance: 1500,
      officialName: "Official Bank 2",
      mask: "****5678",
      institutionId: "inst2",
      type: "checking",
      subtype: "business",
      appwriteItemId: "app2",
      shareableId: "share2",
    },
    {
      id: "3",
      name: "Bank 3",
      currentBalance: 500,
      availableBalance: 500,
      officialName: "Official Bank 3",
      mask: "****9101",
      institutionId: "inst3",
      type: "savings",
      subtype: "personal",
      appwriteItemId: "app3",
      shareableId: "share3",
    },
  ];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={dummyAccounts}
            totalBanks={dummyAccounts.length}
            totalCurrentBalance={dummyAccounts.reduce(
              (acc, account) => acc + account.currentBalance,
              0
            )}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.50}]} />
    </section>
  );
};

export default Home;
