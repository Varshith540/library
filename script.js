// KHIT Library Management System - JavaScript

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    console.log('KHIT Library Management System loaded successfully');
    
    // Initialize the system
    initializeSystem();
});

// Initialize the library management system
function initializeSystem() {
    // Setup navigation
    setupNavigation();
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
}

// Setup navigation highlighting
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Smooth scroll function
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Book Management Functions
const BookManager = {
    books: [],
    
    addBook: function(book) {
        this.books.push(book);
        console.log('Book added:', book);
    },
    
    removeBook: function(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
        console.log('Book removed:', bookId);
    },
    
    searchBook: function(query) {
        return this.books.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
    }
};

// Member Management Functions
const MemberManager = {
    members: [],
    
    addMember: function(member) {
        this.members.push(member);
        console.log('Member added:', member);
    },
    
    removeMember: function(memberId) {
        this.members = this.members.filter(member => member.id !== memberId);
        console.log('Member removed:', memberId);
    },
    
    searchMember: function(query) {
        return this.members.filter(member => 
            member.name.toLowerCase().includes(query.toLowerCase())
        );
    }
};

// Transaction Management
const TransactionManager = {
    transactions: [],
    
    issueBook: function(bookId, memberId) {
        const transaction = {
            id: Date.now(),
            bookId: bookId,
            memberId: memberId,
            issueDate: new Date(),
            returnDate: null
        };
        this.transactions.push(transaction);
        console.log('Book issued:', transaction);
        return transaction;
    },
    
    returnBook: function(transactionId) {
        const transaction = this.transactions.find(t => t.id === transactionId);
        if (transaction) {
            transaction.returnDate = new Date();
            console.log('Book returned:', transaction);
        }
        return transaction;
    }
};

console.log('Library Management System modules loaded');
