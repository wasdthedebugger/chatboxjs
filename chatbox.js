class ChatBox {
    constructor(name, width, height, chatUrl, displayText, backgroundColor, textColor, imageUrl, fontFamily=null) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.chatUrl = chatUrl;
        this.displayText = displayText;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.imageUrl = imageUrl;
        this.fontFamily = fontFamily;
    }

    help() {
        console.log('Nikas Ghimire https://nikas.com.np')
        console.log('Required properties:');
        console.table(`
        name: string
        width: number
        height: number
        chatUrl: string
        displayText: string
        imageUrl: string
        `);
    }

    init() {
        const chatBoxHTML = document.querySelector('#chat-box');

        chatBoxHTML.innerHTML = `
        <style>
        #chat-box {
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 1000;
            margin: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            gap: 10px;
          
            .display-text {
              background-color: ${this.backgroundColor};
              color: ${this.textColor};
              font-family: ${this.fontFamily || ''} ;
              padding: 10px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              margin-top: 20px;
            }
          
            img {
              width: 50px;
            }
          
          }
          
          @media (max-width: 768px) {
            #chat-box {
              margin: 20px;
              gap: 5px;
          
              .display-text {
                padding: 5px;
                font-size: 12px;
              }
          
              img {
                width: 30px;
              }
            }
          }
          </style>
        <p class="display-text">
        ${this.displayText}
        </p>
        <img src="${this.imageUrl}" alt="" srcset="">
        `;

        chatBoxHTML.addEventListener('click', () => {
            window.open(this.chatUrl, this.name, `width=${this.width}, height=${this.height}`);
        });
    }
}