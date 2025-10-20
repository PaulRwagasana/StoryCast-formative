// Transcript toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.transcript-toggle');
    const transcriptContent = document.querySelector('.transcript-content');
    
    if (toggleButton && transcriptContent) {
        toggleButton.addEventListener('click', function() {
            const isExpanded = transcriptContent.hidden;
            
            transcriptContent.hidden = !isExpanded;
            toggleButton.textContent = isExpanded ? 'Hide Transcript' : 'Show Full Transcript';
            toggleButton.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                setTimeout(() => {
                    transcriptContent.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            }
        });
    }
    
    // Enhance keyboard navigation for custom controls
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('transcript-toggle')) {
                e.preventDefault();
                e.target.click();
            }
        }
    });
});