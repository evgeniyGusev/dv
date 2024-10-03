import mongoose from 'mongoose';

const ChildrenSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community',
    },
    cost: {
      choreography: {
        type: Number, // 3800
        required: true,
      },
      actor: {
        type: Number, // 900
        required: true,
      },
      stretch: {
        type: Number, // 900
        required: true,
      }
    },
  },
  {
    timestamps: true,
  }
);

function a(arr = [
  'Алексютина Василина',
  'Белокудров Иван',
  'Гусева Алина',
  'Дмитриева Ева',
  'Ефимова Ева',
  'Заворохина Екатерина',
  'Иванова Алиса',
  'Иванова Елизавета',
  'Колпакова Алиса',
  'Комарова Карина',
  'Коневец София',
  'Котова Мария',
  'Лапина Мирослава',
  'Лебедев Михаил',
  'Лигачева Маша',
  'Мяндин Максим',
  'Осипова Екатерина',
  'Субботина Василиса',
  'Торчинская Вика',
  'Черноусова Мирослава',
  'Шакирова Милана',
  'Яковлева Аня',
  'Яковлева Дарья',
]) {
  return arr.map(el => {
    return JSON.stringify({
      "fullName": el,
      "cost": {
        "choreography": 2800,
      },
      "createdAt": {
        "$date": "2024-09-29T18:06:46.446Z"
      },
      "updatedAt": {
        "$date": "2024-09-29T18:06:46.446Z"
      },
      "__v": 0,
      "community": "66fed2ca758fc596a3da083e"
    })
  })
}

const ChildrenModel = mongoose.model('Children', ChildrenSchema, 'children');

export default ChildrenModel;

/*



 */
