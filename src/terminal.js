/**
 * Terminal — Live log simulator
 */

export function initTerminal() {
    const terminal = document.getElementById('terminal-logs');
    if (!terminal) return;

    const logs = [
        { text: "[INFO] Incoming payload from OpenAI-GPT4o. Size: 14KB", cls: "log-info" },
        { text: "[OK] Token Validated. JWT Signed.", cls: "log-ok" },
        { text: "[ROUTE] Forwarding to Kong API Gateway -> n8n_worker_01", cls: "log-purple" },
        { text: "[WARN] High latency on external API call (1050ms)", cls: "log-warn" },
        { text: "[EXEC] Running n8n workflow 'Lead_Qualification_Agent'", cls: "log-purple" },
        { text: "[DB] Vector embeddings stored in PG_Vault (1536-dim)", cls: "log-err" },
        { text: "[OK] AI processing cycle complete. Memory freed: 256MB", cls: "log-ok" },
        { text: "[NET] WAF dropped malicious payload from 192.168.x.x", cls: "log-warn" },
        { text: "[SYNC] Backup snapshot synchronized to cold storage", cls: "log-info" },
        { text: "[PROCESS] Anthropic Claude payload received", cls: "log-purple" },
        { text: "[EXEC] Triggering internal CRM sync...", cls: "log-purple" },
        { text: "[OK] Agent response delivered in 340ms", cls: "log-ok" },
    ];

    // Lazy init: only start when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startLogs();
                observer.disconnect();
            }
        });
    }, { rootMargin: '200px' });

    observer.observe(terminal);

    function startLogs() {
        function addLog() {
            const log = logs[Math.floor(Math.random() * logs.length)];
            const time = new Date().toISOString().substring(11, 19);
            const tag = log.text.split(' ')[0];
            const rest = log.text.substring(log.text.indexOf(' ') + 1);

            const line = document.createElement('div');
            line.className = 'log-line';
            line.innerHTML = `<span class="${log.cls}">${tag}</span> <span style="color:#64748b">[${time}]</span> ${rest}`;
            line.style.animation = 'fadeUp 0.3s ease-out';

            const cursor = terminal.lastElementChild;
            terminal.insertBefore(line, cursor);

            while (terminal.children.length > 7) {
                terminal.removeChild(terminal.firstElementChild);
            }

            setTimeout(addLog, Math.random() * 1200 + 400);
        }

        setTimeout(addLog, 800);
    }
}
