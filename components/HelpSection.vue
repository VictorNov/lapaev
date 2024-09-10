<template>
  <section class="help-section">
    <div class="card" v-for="(problem, index) in problems" :key="index">
      <h3>{{ problem.title }}</h3>
      <p>{{ problem.shortDescription }}</p>
      <div class="hover-content">
        <p>{{ problem.detailedDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      problems: [
        {
          title: "Депрессия",
          shortDescription: "Когда жизнь теряет краски и хочется просто исчезнуть...",
          detailedDescription: "Я помогу вам вернуть смысл и радость в каждый новый день."
        },
        {
          title: "Тревожность",
          shortDescription: "Кажется, что мир вокруг слишком пугает, и нет места спокойствию.",
          detailedDescription: "Мы найдем способы справиться с тревогой и научимся жить здесь и сейчас."
        },
        {
          title: "Одиночество",
          shortDescription: "Когда никто не слышит и некому доверить своё сердце.",
          detailedDescription: "Я помогу вам почувствовать связь с собой и окружающими."
        },
        {
          title: "Утрата и горе",
          shortDescription: "Когда потеря кажется бесконечной, и невозможно отпустить.",
          detailedDescription: "Мы пройдем через боль вместе, и вы найдете силы идти дальше."
        },
        {
          title: "Панические атаки",
          shortDescription: "Неожиданные приступы страха захватывают и не отпускают.",
          detailedDescription: "Я помогу вам вернуть контроль над собой и своим телом."
        },
        {
          title: "Неуверенность в поведении",
          shortDescription: "Когда сложно выразить себя и быть понятым.",
          detailedDescription: "Я помогу вам обрести уверенность и научиться быть собой."
        },
        {
          title: "Созависимые и конфликтные отношения",
          shortDescription: "Когда отношения приносят больше боли, чем радости.",
          detailedDescription: "Мы разберемся, как восстановить баланс и гармонию в отношениях."
        },
        {
          title: "Сексуальные и другие трудности",
          shortDescription: "Когда интимные моменты приносят тревогу, а не радость.",
          detailedDescription: "Я помогу вам разобраться в своих желаниях и вернуть радость от близости."
        },
        {
          title: "Психо-эмоциональное и сексуализированное насилие",
          shortDescription: "Когда воспоминания о насилии всё ещё болят и не отпускают.",
          detailedDescription: "Мы справимся с болью прошлого и начнем строить светлое будущее."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.help-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.card {
  position: relative;
  width: 300px;
  padding: 20px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-surface));
  border-radius: 8px;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 6px 10px rgb(0 0 0 / 15%);
  transform: translateY(-10px);
}

.card h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.card p {
  color: rgba(var(--v-theme-on-surface), 0.8);
  font-size: 1rem;
}

.hover-content {
  position: absolute;
  right: 0;
  bottom: -100%;
  left: 0;
  height: 100%;
  padding: 20px;
  background-color: rgba(var(--v-theme-surface), 0.95);
  transition: bottom 0.3s ease;
}

.card:hover .hover-content {
  bottom: 0;
}
</style>
