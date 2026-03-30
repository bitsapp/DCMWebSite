/**
 * Frontend Security — Prevents casual inspection
 */
export function initSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault(), false);

    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || e.keyCode === 123) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) e.preventDefault();
        if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) e.preventDefault();
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) e.preventDefault();
    });
}
