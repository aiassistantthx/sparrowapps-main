// Global footer component
(function() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-author">
                    <img src="/photo.jpg" alt="Ivan Sparrow" class="footer-photo" width="48" height="48">
                    <div class="footer-bio">
                        <div class="footer-name">Ivan Sparrow</div>
                        <div class="footer-tagline">Building apps, scaling with ads.</div>
                    </div>
                </div>
                <div class="footer-links">
                    <a href="https://blog.sparrowapps.io">Newsletter</a>
                    <a href="https://x.com/ivesparrowai">Twitter</a>
                    <a href="/articles/">Articles</a>
                    <a href="/">Services</a>
                </div>
                <div class="footer-copyright">
                    © 2026 SparrowApps
                </div>
            </div>
        </footer>
    `;

    const footerStyles = `
        .footer {
            background: #faf8f5;
            padding: 48px 24px 32px;
        }
        .footer-content {
            max-width: 760px;
            margin: 0 auto;
        }
        .footer-author {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
        }
        .footer-photo {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            flex-shrink: 0;
        }
        .footer-bio {
            flex: 1;
        }
        .footer-name {
            font-size: 17px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }
        .footer-tagline {
            font-size: 15px;
            color: #666;
        }
        .footer-links {
            display: flex;
            gap: 24px;
            margin-bottom: 32px;
        }
        .footer-links a {
            font-size: 15px;
            color: #666;
            text-decoration: none;
            transition: color 0.2s;
        }
        .footer-links a:hover {
            color: #1a1a1a;
            text-decoration: none;
        }
        .footer-copyright {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
        @media (max-width: 700px) {
            .footer-author {
                flex-direction: column;
                text-align: center;
            }
            .footer-links {
                flex-direction: column;
                align-items: center;
                gap: 16px;
            }
        }
    `;

    // Inject styles
    const styleEl = document.createElement('style');
    styleEl.textContent = footerStyles;
    document.head.appendChild(styleEl);

    // Inject footer
    document.addEventListener('DOMContentLoaded', function() {
        const placeholder = document.getElementById('global-footer');
        if (placeholder) {
            placeholder.innerHTML = footerHTML;
        } else {
            // Append to body if no placeholder
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    });
})();
