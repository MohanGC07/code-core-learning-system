// =============================================
// PyScript Initialization
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add run button to all pyscript editors
    const initPyScript = () => {
        const editors = document.querySelectorAll('py-script, py-repl');
        editors.forEach((editor, index) => {
            // Skip if already processed
            if (editor.dataset.processed) return;
            editor.dataset.processed = 'true';
            
            // Add loading indicator
            const wrapper = document.createElement('div');
            wrapper.className = 'pyscript-wrapper';
            editor.parentNode.insertBefore(wrapper, editor);
            wrapper.appendChild(editor);
        });
    };

    // Run on load and after dynamic content
    initPyScript();
    
    // Re-init on navigation (MkDocs instant loading)
    document.addEventListener('DOMContentLoaded', initPyScript);
});