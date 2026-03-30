/**
 * Contact — Form validation and submission
 */

export function initContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const payload = Object.fromEntries(data.entries());

        // Basic validation
        if (!payload.name || !payload.email || !payload.service) {
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btn.disabled = true;

        try {
            const TELEGRAM_TOKEN = '8780459191:AAEjI7nqvr_zqSb89a8HxsgvG2AtygcD6EI';
            const TELEGRAM_CHAT_ID = '692754317';

            const serviceLabels = {
                desarrollo: 'Desarrollo a Medida',
                mantenimiento: 'Software de Mantenimiento',
                ia: 'IA Avanzada Industrial',
                agentes: 'Agentes Inteligentes',
                rpa: 'Automatizacion RPA',
                seguridad: 'Seguridad Ciudadana',
                iot: 'IoT / BLE / RFID',
                integracion: 'Integracion de Sistemas',
                analitica: 'Analitica y Smart Cities',
                academia: 'Capacitacion en IA'
            };

            const message = [
                '🚀 <b>Nuevo Lead — dcmsystem.co</b>',
                '',
                `👤 <b>Nombre:</b> ${payload.name}`,
                `📧 <b>Email:</b> ${payload.email}`,
                `🏢 <b>Empresa:</b> ${payload.company || '—'}`,
                `🎯 <b>Servicio:</b> ${serviceLabels[payload.service] || payload.service}`,
                `💬 <b>Mensaje:</b>\n${payload.message || '—'}`,
                '',
                `🕐 ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}`
            ].join('\n');

            await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            btn.innerHTML = '<i class="fa-solid fa-check"></i> Enviado!';
            btn.style.background = '#22c55e';
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);

        } catch {
            btn.innerHTML = '<i class="fa-solid fa-exclamation-triangle"></i> Error';
            btn.style.background = '#ef4444';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }
    });
}
