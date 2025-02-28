document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate');
    const randomBtn = document.getElementById('random');
    const copyBtn = document.getElementById('copy');
    const resultArea = document.getElementById('result');

    generateBtn.addEventListener('click', generatePrompt);
    randomBtn.addEventListener('click', generateRandomPrompt);
    copyBtn.addEventListener('click', copyToClipboard);

    // Arrays for random selections with expanded options
    const ethnicities = [
        'Japanese', 'Korean', 'Malay'
    ];

    const styles = [
        'realistic', 'photorealistic', 'natural', 'candid', 'cinematic', 
        'documentary style', 'street photography', 'lifestyle photography',
        'editorial', 'ambient', 'authentic', 'journalistic',
        'contemporary', 'modern', 'clean', 'crisp',
        'film-like', 'analog', 'vintage', 'classic',
        '35mm film', 'medium format', 'high resolution', 'sharp detail',
        'soft focus', 'natural contrast', 'rich colors', 'muted tones',
        'natural lighting', 'environmental portrait', 'candid portrait'
    ];

    const moods = [
        'naturally engaged', 'looking at shop window', 'reading phone', 'checking time',
        'browsing a book', 'sipping coffee', 'looking at menu', 'checking map',
        'writing in notebook', 'taking photos', 'admiring view', 'checking watch',
        'reading newspaper', 'using tablet', 'adjusting bag', 'fixing hair',
        'looking for keys', 'checking schedule', 'ordering food', 'paying bill',
        'window gazing', 'people watching', 'checking reflection', 'organizing papers',
        'typing message', 'checking weather', 'reading sign', 'checking transit schedule',
        'browsing store', 'checking directions', 'looking thoughtful'
    ];

    const backgrounds = [
        'busy city street', 'shopping mall', 'public park', 'train station',
        'cafe terrace', 'bookstore', 'public library', 'art gallery',
        'museum lobby', 'hotel lobby', 'office building', 'subway platform',
        'bus stop', 'pedestrian crossing', 'city plaza', 'food court',
        'department store', 'convenience store', 'street market', 'flower shop',
        'bakery', 'coffee shop', 'restaurant', 'airport terminal',
        'urban garden', 'public square', 'shopping district', 'cultural center',
        'city park bench', 'riverside walkway', 'urban playground'
    ];

    const lightings = [
        'natural sunlight', 'evening golden hour', 'overcast day', 'bright daylight',
        'morning light', 'afternoon sun', 'sunset glow', 'dusk lighting',
        'diffused daylight', 'soft morning light', 'warm afternoon sun', 'cool morning light',
        'cloudy day light', 'indirect sunlight', 'filtered sunlight', 'ambient light',
        'street lamp light', 'store front lighting', 'cafe lighting', 'window light',
        'natural shade', 'awning shade', 'tree filtered light', 'building reflected light',
        'mall lighting', 'display lighting', 'atmospheric lighting', 'gentle sunlight',
        'natural indoor light', 'skylight illumination', 'doorway lighting'
    ];

    const attires = [
        'casual business attire', 'summer dress', 'winter coat', 'casual weekend outfit',
        'office wear', 'smart casual outfit', 'blazer and jeans', 'cardigan ensemble',
        'sweater and skirt', 'blouse and pants', 'turtleneck and coat', 'shirt dress',
        'wrap dress', 'trench coat outfit', 'casual blazer look', 'sweater dress',
        'business casual suit', 'pencil skirt ensemble', 'casual friday outfit', 'professional wear',
        'midi dress', 'layered winter outfit', 'light jacket outfit', 'autumn ensemble',
        'spring outfit', 'casual chic look', 'modern professional wear', 'contemporary casual',
        'elegant casual', 'refined street wear', 'sophisticated casual'
    ];

    const poses = [
        'window shopping', 'checking phone', 'waiting for crosswalk', 'sitting at cafe',
        'walking casually', 'standing relaxed', 'browsing items', 'reading menu',
        'checking time', 'writing notes', 'taking photos', 'looking at map',
        'sitting on bench', 'leaning on railing', 'walking with bag', 'ordering coffee',
        'browsing book', 'looking at artwork', 'checking schedule', 'waiting in line',
        'walking down stairs', 'using escalator', 'entering shop', 'exiting building',
        'sitting at table', 'standing in queue', 'walking with coffee', 'checking display',
        'browsing shelf', 'using tablet', 'adjusting jacket'
    ];

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateRandomPrompt() {
        document.getElementById('style').value = getRandomElement(styles);
        document.getElementById('mood').value = getRandomElement(moods);
        document.getElementById('background').value = getRandomElement(backgrounds);
        document.getElementById('lighting').value = getRandomElement(lightings);
        document.getElementById('attire').value = getRandomElement(attires);
        document.getElementById('pose').value = getRandomElement(poses);

        generatePrompt();
    }

    function generatePrompt() {
        const style = document.getElementById('style').value.trim() || 'realistic';
        const mood = document.getElementById('mood').value.trim() || 'naturally engaged';
        const background = document.getElementById('background').value.trim() || 'busy city street';
        const lighting = document.getElementById('lighting').value.trim() || 'natural';
        const attire = document.getElementById('attire').value.trim() || 'casual business attire';
        const pose = document.getElementById('pose').value.trim() || 'casually window shopping';
        const ethnicity = getRandomElement(ethnicities);

        const basePrompt = `A cute mature with long hair, chubby yet muscular ${ethnicity} female bodybuilder with a strong and athletic physique, in a ${style} style, with a ${mood} expression, in a ${background}, under ${lighting} lighting, wearing ${attire}, and ${pose}. The image should emphasize her strength and confidence in a realistic and respectful manner.`;

        resultArea.value = basePrompt;
        // Auto copy to clipboard when prompt is generated
        resultArea.select();
        document.execCommand('copy');
    }

    function copyToClipboard() {
        resultArea.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }
}); 