import { test, expect } from '@playwright/test';

const initialText = 'Your content goes here.';

const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraphin the middle';
const textLastParagraph = 'This is the last paragraph. Good bye!';

const newText = [textFirstParagraph , textMiddleParagraph , textLastParagraph].join('\n');

test.describe('The-Internet WYSIWYG editor', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/tinymce');
        await expect(page.locator('h3')).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
    });

    test('should have an initial text [T_20]', async ({ page }) => { 
        const richTextAreaFrame = page.frameLocator('iframe[title="Rich Text Area"]'); 
        await expect(richTextAreaFrame.getByText(initialText)).toBeVisible();
    });

    test('should be able to replace initial text by new one [T_21]', async ({ page }) => { 
        const richTextAreaFrame = page.frameLocator('iframe[title="Rich Text Area"]');
        const tinymce = richTextAreaFrame.locator('#tinymce');
        await expect(richTextAreaFrame.getByText(initialText)).toBeVisible();
        await tinymce.press('Control+a');
        await tinymce.fill(newText);
        await expect(tinymce.getByText(textFirstParagraph)).toBeVisible();
        await expect(tinymce.getByText(textLastParagraph)).toBeVisible();
        await expect(tinymce.getByText(initialText)).not.toBeVisible();  
    });

    test('should be able to delete last paragraph with keyboard shortcuts [T_22]', async ({ page }) => { 
        const richTextAreaFrame = page.frameLocator('iframe[title="Rich Text Area"]');
        const tinymce = richTextAreaFrame.locator('#tinymce');
        await expect(richTextAreaFrame.getByText(initialText)).toBeVisible();
        await tinymce.press('Control+a');
        await tinymce.fill(newText);
        await expect(tinymce.getByText(textLastParagraph)).toBeVisible();
        await expect(richTextAreaFrame.getByText(initialText)).not.toBeVisible(); 
        await tinymce.press('End');
        await tinymce.press('Control+Shift+ArrowUp');
        await tinymce.press('Delete'); 
        await expect(tinymce.getByText(textFirstParagraph)).toBeVisible();
        await expect(tinymce.getByText(textLastParagraph)).not.toBeVisible();
    });
});