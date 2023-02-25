export const sendTelegram = (data, setSuccess) => {
  let bot = {
    token: "6199116702:AAHxk8cn7Hbtkk11vmpzBx6haTdwzitso7k",
    chatID: "-1001780302381",
    message: `<b>Ism Familya:</b> +${data.name} %0A<b>Nomer:</b> +${data.tel} %0A<b>Mijoz Manzili:</b> +${data.address} %0A<b>Maxsulot Massasi:</b> +${data.size}kg`,
  };

  fetch(
    `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}&parse_mode=html`,
    {
      method: "GET",
    }
  ).then(
    (success) => {
      setSuccess(true);
    },
    (error) => {
      console.log(error);
    }
  );
};
