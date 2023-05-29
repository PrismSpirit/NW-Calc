<!-- <h1>Welcome to SvelteKit</h1>
<li>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</li> -->

<script lang="ts">
    let status = {
        atk: 5,
        atk_per: 0,
        str: 0,
        str_per: 0,
        dex: 0,
        dex_per: 0,
        int: 0,
        int_per: 0,
        crit_rate: 0,
        crit_dmg: 20,
        atk_speed: 0,
        accuracy_rate: 0,
        dmg_inc: 0,
        dmg_amp: 0,
        casting_speed: 0,
        cooldown_accel: 0,
        buff_eff: 0,
        skill_dmg: 0,
        def_penetrate: 0,
        real_dmg: 0,
        dream_dmg: 0,
        purg_dmg: 0,
        normal_dmg: 0,
        boss_dmg: 0,
        melee_dmg: 0,
        ranged_dmg: 0,
        dot_dmg: 0,
        back_dmg: 0,
        counter_dmg: 0,
        neutral_dmg: 0,
        fire_dmg: 0,
        water_dmg: 0,
        light_dmg: 0,
        dark_dmg: 0
    };

    let baseStatus = JSON.parse(JSON.stringify(status)); // deep-copy for initialize
    
    function adjustStatus(stat: string, value: number) {
        switch(stat) {
            case "공격력 +n": {
                status.atk += value;
                return;
            }
            case "공격력 +n%": {
                status.atk_per += value;
                return;
            }
            case "힘 +n": {
                status.str += value;
                return;
            }
            case "힘 +n%": {
                status.str_per += value;
                return;
            }
            case "민첩 +n": {
                status.dex += value;
                return;
            }
            case "민첩 +n%": {
                status.dex_per += value;
                return;
            }
            case "지능 +n": {
                status.int += value;
                return;
            }
            case "지능 +n%": {
                status.int_per += value;
                return;
            }
            case "치명타 확률 +n%": {
                status.crit_rate += value;
                return;
            }
            case "치명타 피해 +n%": {
                status.crit_dmg += value;
                return;
            }
            case "공격 속도 +n%": {
                status.atk_speed += value;
                return;
            }
            case "적중 확률 +n%": {
                status.accuracy_rate += value;
                return;
            }
            case "피해 증가 +n%": {
                status.dmg_inc += value;
                return;
            }
            case "피해 증폭 +n": {
                status.dmg_amp += value;
                return;
            }
            case "캐스팅/차지 속도 +n%": {
                status.casting_speed += value;
                return;
            }
            case "스킬 재사용 속도 +n%": {
                status.cooldown_accel += value;
                return;
            }
            case "버프 효과 +n%": {
                status.buff_eff += value;
                return;
            }
            case "모든 스킬 피해 +n%": {
                status.skill_dmg += value;
                return;
            }
            case "방어력 관통 +n%": {
                status.def_penetrate += value;
                return;
            }
            case "원세계 추가 피해 +n%": {
                status.real_dmg += value;
                return;
            }
            case "꿈세계 추가 피해 +n%": {
                status.dream_dmg += value;
                return;
            }
            case "연옥 추가 피해 +n%": {
                status.purg_dmg += value;
                return;
            }
            case "일반 몬스터 추가 피해 +n%": {
                status.normal_dmg += value;
                return;
            }
            case "우두머리 추가 피해 +n%": {
                status.boss_dmg += value;
                return;
            }
            case "몬스터 추가 피해 +n%": {
                status.normal_dmg += value;
                status.boss_dmg += value;
                return;
            }
            case "근거리 피해 +n%": {
                status.melee_dmg += value;
                return;
            }
            case "원거리 피해 +n%": {
                status.ranged_dmg += value;
                return;
            }
            case "지속 피해 +n%": {
                status.dot_dmg += value;
                return;
            }
            case "모든 타격 피해 +n%": {
                status.melee_dmg += value;
                status.ranged_dmg += value;
                status.dot_dmg += value;
                return;
            }
            case "백어택 추가 피해 +n%": {
                status.back_dmg += value;
                return;
            }
            case "공격 중인 적 추가 피해 +n%": {
                status.counter_dmg += value;
                return;
            }
            case "무 속성 강화 +n%": {
                status.neutral_dmg += value;
                return;
            }
            case "화 속성 강화 +n%": {
                status.fire_dmg += value;
                return;
            }
            case "수 속성 강화 +n%": {
                status.water_dmg += value;
                return;
            }
            case "명 속성 강화 +n%": {
                status.light_dmg += value;
                return;
            }
            case "암 속성 강화 +n%": {
                status.dark_dmg += value;
                return;
            }
            case "모든 속성 강화 +n%": {
                status.neutral_dmg += value;
                status.fire_dmg += value;
                status.water_dmg += value;
                status.light_dmg += value;
                status.dark_dmg += value;
                return;
            }
            default: {
                return;
            }
        }
    }

    function initStatus() {
        status = JSON.parse(JSON.stringify(baseStatus));
    }

    function activateCardCollectEffect() {
        for (var activatedCardCollectEffect of activatedCardCollectEffects) {
            adjustStatus(activatedCardCollectEffect.effect, activatedCardCollectEffect.value);
        }
    }

    function activateStoneCollectEffect() {
        for (var activatedStoneCollectEffect of activatedStoneCollectEffects) {
            adjustStatus(activatedStoneCollectEffect.effect, activatedStoneCollectEffect.value);
        }
    }

    function activateSoulConnector() {
        for (var activatedSoulConnector of activatedSoulConnectors) {
            adjustStatus(activatedSoulConnector.effect, activatedSoulConnector.value);
        }
    }
    
    function updateStatus() {
        initStatus();
        activateCardCollectEffect();
        activateStoneCollectEffect();
        activateSoulConnector();
    }

    let basicEffect_hanjan = {
        "피해 증폭 +n": [216, 237, 259, 280, 302],
        "꿈세계 추가 피해 +n%": [4.2, 4.9, 5.6, 6.3, 7],
        "방어력 관통 +n%": [2.4, 2.8, 3.2, 3.6, 4],
        "암 속성 강화 +n%": [3, 3.5, 4, 4.5, 5]
    }

    let setEffect_hanjan = {

    }

    let cards = [
        {
            theme: "한 잔의 여유",
            title: "조용한 사색",
            effects: basicEffect_hanjan,
        }
    ]

    // 카드 수집효과
    let cardCollectEffects = [
        { theme: "신들의 대륙", effect: "지능 +n%", value: 3 },
        { theme: "도산검림", effect: "민첩 +n%", value: 3 },
        { theme: "도시의 그림자", effect: "힘 +n%", value: 3 },
        { theme: "잊혀진 땅", effect: "공격력 +n%", value: 2 },
        { theme: "히스토릭 서비스", effect: "화 속성 강화 +n%", value: 5 },
        { theme: "대적자", effect: "수 속성 강화 +n%", value: 5 },
        { theme: "브린디쉬", effect: "명 속성 강화 +n%", value: 5 },
        { theme: "꼭두각시", effect: "암 속성 강화 +n%", value: 5 },
        { theme: "최초의 워커", effect: "원세계 추가 피해 +n%", value: 4 },
        { theme: "시작의 대지", effect: "꿈세계 추가 피해 +n%", value: 4 },
        { theme: "나글파르", effect: "연옥 추가 피해 +n%", value: 4 },
        { theme: "파멸의 군세", effect: "스킬 재사용 속도 +n%", value: 3 },
        { theme: "유랑단", effect: "치명타 피해 +n%", value: 7 },
        { theme: "사천왕", effect: "치명타 피해 +n%", value: 7 },
        { theme: "과격한 신부", effect: "모든 스킬 피해 +n%", value: 4 },
        { theme: "수상한 메이드", effect: "모든 타격 피해 +n%", value: 5 },
        { theme: "겨울의 추억", effect: "우두머리 추가 피해 +n%", value: 6 },
        { theme: "한잔의 여유", effect: "스킬 재사용 속도 +n%", value: 8 },
    ];

    // 스톤 수집효과
    let stoneCollectEffects = [
        { theme: "쇼타임", effect: "공격력 +n%", value: 0.5 },
        { theme: "포기를 몰라", effect: "공격력 +n%", value: 1 },
        { theme: "한순간의 번쩍임", effect: "공격력 +n%", value: 1.5 },
        { theme: "끈질긴 추격자", effect: "공격력 +n%", value: 1.5 },
        { theme: "타락의 대가", effect: "공격력 +n%", value: 1.5 },
        { theme: "운명의 장난", effect: "공격력 +n%", value: 1.5 },
        { theme: "감미로운 장난", effect: "공격력 +n%", value: 2.5 },
        { theme: "가면무도회", effect: "피해 증가 +n%", value: 1 },
        { theme: "빌려온 힘", effect: "피해 증가 +n%", value: 1.5 },
        { theme: "파문하는 물결", effect: "피해 증가 +n%", value: 2 },
        { theme: "파수꾼", effect: "피해 증가 +n%", value: 2 },
        { theme: "침식 : 증오의 신", effect: "피해 증가 +n%", value: 4 },
        { theme: "파문하는 물결", effect: "피해 증가 +n%", value: 3.5 },
    ];

    // 소울 커넥터
    let soulConnectors = [
        // 근, 원추피
        { theme: "쇼타임", effect: "근거리 피해 +n%", value: 7.5 },
        { theme: "가면무도회", effect: "원거리 피해 +n%", value: 7.5 },
        // 속강
        { theme: "일렁이는 어둠", effect: "암 속성 강화 +n%", value: 15 },
        { theme: "한순간의 번쩍임", effect: "명 속성 강화 +n%", value: 15 },
        { theme: "파문하는 물결", effect: "수 속성 강화 +n%", value: 15 },
        { theme: "이글거리는 분노", effect: "화 속성 강화 +n%", value: 15 },
        // 증전
        { theme: "우두머리", effect: "몬스터 추가 피해 +n%", value: 18 },
        { theme: "약육강식", effect: "우두머리 추가 피해 +n%", value: 15 },
        { theme: "약탈자", effect: "일반 몬스터 추가 피해 +n%", value: 12.5 },
        // 연추피
        { theme: "파수꾼", effect: "연옥 추가 피해 +n%", value: 15 },
        { theme: "황야의 무법자", effect: "연옥 추가 피해 +n%", value: 12.5 },
        // 꿈추피
        { theme: "대리인", effect: "꿈세계 추가 피해 +n%", value: 15 },
        { theme: "포기를 몰라", effect: "꿈세계 추가 피해 +n%", value: 12.5 },
        // 원추피
        { theme: "끈질긴 추격자", effect: "원세계 추가 피해 +n%", value: 15 },
        { theme: "빌려온 힘", effect: "원세계 추가 피해 +n%", value: 12.5 },
        // 침식
        { theme: "침식 : 증오의 신", effect: "모든 타격 피해 +n%", value: 30 },
    ];

    let maxSoulConnector = 7;

    let activatedCards: { theme: string; title: string; }
    let activatedSoulConnectors: { theme: string; effect: string; value: number; }[] = [];
    let activatedCardCollectEffects: { theme: string; effect: string; value: number; }[] = [];
    let activatedStoneCollectEffects: { theme: string; effect: string; value: number; }[] = [];
</script>

<h1>나이트워커 스탯계산기</h1>

<h2>캐릭터 스탯</h2>
<ul>
    <li>공격력: {Math.round(status.atk * ((100 + status.atk_per) / 100))}</li>
    <li>힘: {status.str * ((100 + status.str_per) / 100)}</li>
    <li>민첩: {status.dex * ((100 + status.dex_per) / 100)}</li>
    <li>지능: {status.int * ((100 + status.int_per) / 100)}</li>
    <li>치명타 확률: {status.crit_rate}</li>
    <li>치명타 피해: {status.crit_dmg}</li>
    <li>피해 증가: {status.dmg_inc}</li>
    <li>피해 증폭: {status.dmg_amp}</li>
    <li>모든 스킬 피해: {status.skill_dmg}</li>
    <li>원세계 추가 피해: {status.real_dmg}</li>
    <li>꿈세계 추가 피해: {status.dream_dmg}</li>
    <li>연옥 추가 피해: {status.purg_dmg}</li>
    <li>우두머리 추가 피해: {status.boss_dmg}</li>
    <li>원거리 피해: {status.ranged_dmg}</li>
    <li>근거리 피해: {status.melee_dmg}</li>
    <li>백어택 추가 피해: {status.back_dmg}</li>
    <li>공격 중인 적 추가 피해: {status.counter_dmg}</li>
    <li>무 속성 강화: {status.neutral_dmg}</li>
    <li>화 속성 강화: {status.fire_dmg}</li>
    <li>수 속성 강화: {status.water_dmg}</li>
    <li>명 속성 강화: {status.light_dmg}</li>
    <li>암 속성 강화: {status.dark_dmg}</li>
</ul>


<h2>카드 수집효과</h2>

{#each cardCollectEffects as cardCollectEffect, index}
<div class="cardCollectEffect">
    <input
        type=checkbox
        value={cardCollectEffect}
        id="cardCollectEffect{index}"
        bind:group={activatedCardCollectEffects}
        on:change={updateStatus}
    >
    <label for="cardCollectEffect{index}">{cardCollectEffect.theme} ({cardCollectEffect.effect.slice(0, cardCollectEffect.effect.lastIndexOf('n'))}{cardCollectEffect.value}%)</label>
    <select>
        {#each [1, 2, 3, 4] as level}
            <option value={level}>
                {level}
            </option>
        {/each}
    </select>
</div>
{/each}

<h2>스톤 수집효과</h2>

{#each stoneCollectEffects as stoneCollectEffect, index}
<div class="stoneCollectEffect">
    <input
        type=checkbox
        value={stoneCollectEffect}
        id="stoneCollectEffect{index}"
        bind:group={activatedStoneCollectEffects}
        on:change={updateStatus}
    >
    <label for="stoneCollectEffect{index}">{stoneCollectEffect.theme} ({stoneCollectEffect.effect.slice(0, stoneCollectEffect.effect.lastIndexOf('n'))}{stoneCollectEffect.value}%)</label>
</div>
{/each}

<h2>소울 커넥터</h2>
<h4>소울커넥터는 최대 {maxSoulConnector}개까지 장착할 수 있습니다.</h4>

{#each soulConnectors as soulConnector, index}
<div class="soulConnector">
    <input
        type=checkbox
        value={soulConnector}
        id="soulConnector{index}"
        bind:group={activatedSoulConnectors}
        on:change={updateStatus}
        disabled={activatedSoulConnectors.length === maxSoulConnector && !activatedSoulConnectors.includes(soulConnector)}
    >
    <label for="soulConnector{index}">{soulConnector.theme} ({soulConnector.effect.slice(0, soulConnector.effect.lastIndexOf('n'))}{soulConnector.value}%)</label>
</div>
{/each}
