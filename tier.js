const tiers = {
    tier1: {
        name: "Seedling",
        cost: 30
    },
    tier2: {
        name: "Riped",
        cost: 70
    }
};

function redirectToPayment(tier) {
    console.log("Selected tier:", tier);  // Outputs the tier being selected
    localStorage.setItem('selectedTier', tier);
    window.location.href = 'payment.html';
}
